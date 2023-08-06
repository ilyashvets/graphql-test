import { forwardRef, Module } from '@nestjs/common';
import { TicketResolver } from './ticket.resolver';
import { TicketService } from './ticket.service';
import { HttpModule } from '@nestjs/axios';
import { TicketPortalModule } from '../ticketPortal/ticketPortal.module';

@Module({
  imports: [HttpModule, forwardRef(() => TicketPortalModule)],
  providers: [TicketResolver, TicketService],
})
export class TicketModule {}
