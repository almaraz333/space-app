import {
  Arg,
  Ctx,
  Field,
  Int,
  Mutation,
  ObjectType,
  Query,
  Resolver,
  UseMiddleware,
} from "type-graphql";
import { User } from "./entity/User";
import { hash, compare } from "bcryptjs";
import { Context } from "vm";
import { createAccessToken, createRefreshToken } from "./auth";
import { authMiddleware } from "./authMiddleware";
import { sendRefreshToken } from "./sendRefreshToken";
import { getConnection } from "typeorm";

import { AuthenticationError } from "apollo-server-express";
import { FavoriteArticle } from "./entity/FavoriteArticle";

@ObjectType()
class LoginResponse {
  @Field()
  accessToken: string;
  @Field()
  userId: number;
}

@Resolver()
export class UserResolver {
  @Query(() => String)
  @UseMiddleware(authMiddleware)
  userId(@Ctx() { payload }: Context) {
    payload.userId;
  }

  @Query(() => User)
  user(@Arg("userId", () => Int) userId: number) {
    return User.find({ where: { userId } });
  }

  @Query(() => [FavoriteArticle])
  favoriteArticles(@Arg("userId", () => Int) userId: number) {
    return FavoriteArticle.find({ where: { userId } });
  }

  @Mutation(() => Boolean)
  async logout(@Ctx() { res }: Context) {
    sendRefreshToken(res, "");
    return true;
  }

  @Mutation(() => Boolean)
  async register(
    @Arg("email", () => String) email: string,
    @Arg("password") password: string
  ) {
    const hashPass = await hash(password, 12);
    try {
      await User.insert({
        email,
        password: hashPass,
      });
    } catch (err) {
      console.log(err);
      return false;
    }

    return true;
  }

  @Mutation(() => Boolean)
  async addArticle(
    @Arg("url", () => String) url: string,
    @Arg("title", () => String) title: string,
    @Arg("publisher", () => String) publisher: string,
    @Arg("userId", () => Int) userId: number,
    @Arg("imageUrl", () => String) imageUrl: string,
    @Arg("description", () => String) description: string,
    @Arg("sourceName", () => String) sourceName: string
  ) {
    try {
      await FavoriteArticle.insert({
        url,
        title,
        publisher,
        userId,
        imageUrl,
        description,
        sourceName,
      });
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  @Mutation(() => LoginResponse)
  async login(
    @Arg("email") email: string,
    @Arg("password") password: string,
    @Ctx() { res }: Context
  ): Promise<LoginResponse | Error> {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return new AuthenticationError("Invalid Login");
    }

    const valid = await compare(password, user.password);

    if (!valid) {
      return new AuthenticationError("Invalid Login");
    }

    //login successfully

    sendRefreshToken(res, createRefreshToken(user));

    return {
      accessToken: createAccessToken(user),
      userId: user.id,
    };
  }

  @Mutation(() => Boolean) //todo make function so its not exposed
  async revokeUsersRefreshTokens(@Arg("userId", () => Int) userId: number) {
    await getConnection()
      .getRepository(User)
      .increment({ id: userId }, "tokenVersion", 1);

    return true;
  }
}
