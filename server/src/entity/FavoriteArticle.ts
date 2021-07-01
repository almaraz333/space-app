import { Field, Int, ObjectType } from "type-graphql";
import { Entity, Column, BaseEntity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity("favorite_articles")
export class FavoriteArticle extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column("text")
  title: string;

  @Field()
  @Column("text")
  publisher: string;

  @Field()
  @Column("text")
  url: string;

  @Field()
  @Column("text")
  userId: number;

  @Field()
  @Column("text")
  imageUrl: string;

  @Field()
  @Column("text")
  description: string;

  @Field()
  @Column("text")
  sourceName: string;
}
