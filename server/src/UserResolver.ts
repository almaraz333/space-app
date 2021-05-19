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

@ObjectType()
class LoginResponse {
  @Field()
  accessToken: string;
}

@Resolver()
export class UserResolver {
  @Query(() => String)
  hello() {
    return "yeet";
  }

  @Query(() => String)
  @UseMiddleware(authMiddleware)
  bye(@Ctx() { payload }: Context) {
    return `your user ID is ${payload.userId}`;
  }

  @Query(() => [User])
  users() {
    return User.find();
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

  @Mutation(() => LoginResponse)
  async login(
    @Arg("email") email: string,
    @Arg("password") password: string,
    @Ctx() { res }: Context
  ): Promise<LoginResponse> {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      throw new Error("Invalid Login");
    }

    const valid = await compare(password, user.password);

    if (!valid) {
      throw new Error("Invalid Login");
    }

    //login successfully

    sendRefreshToken(res, createRefreshToken(user));

    return {
      accessToken: createAccessToken(user),
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
