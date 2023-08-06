import { Args, Query, Resolver } from '@nestjs/graphql';
import { TicketService } from './ticket.service';
import { TicketEntity } from './ticket.entity';

@Resolver(() => TicketEntity)
export class TicketResolver {
  constructor(private readonly ticketService: TicketService) {}

  @Query(() => [TicketEntity])
  tickets(@Args('id') id: number) {
    return this.ticketService.getAll(id);
  }
}
