import { Module } from '@nestjs/common';
import { TicketPortalService } from './ticketPortal.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [TicketPortalService],
  exports: [TicketPortalService],
})
export class TicketPortalModule {}
