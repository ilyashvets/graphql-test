import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class TicketEntity {
  @Field()
  section: string;

  @Field()
  row: string;

  @Field(() => Int)
  number: number;

  @Field(() => Int)
  price: number;
}
