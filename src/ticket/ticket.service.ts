import { Injectable } from '@nestjs/common';
import { TicketPortalService } from '../ticketPortal/ticketPortal.service';
import { TicketEntity } from './ticket.entity';

@Injectable()
export class TicketService {
  constructor(private readonly ticketPortalService: TicketPortalService) {}

  async getAll(performanceId: number): Promise<TicketEntity[]> {
    try {
      const { seats, sections, prices } =
        await this.ticketPortalService.getTicketInfo(performanceId);

      const availableSeats: TicketEntity[] = [];

      seats.forEach((seat) => {
        if (seat.SeatStatusId !== 0) return;
        availableSeats.push({
          section: sections.get(seat.SectionId),
          row: seat.SeatRow,
          number: seat.SeatNumber,
          price: prices.get(seat.ZoneId),
        });
      });

      return availableSeats;
    } catch (err) {
      console.log(err.message);
      return err.message;
    }
  }
}
