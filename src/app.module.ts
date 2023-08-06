import { Module } from '@nestjs/common';
import { join } from 'path';
import { GraphQLModule } from '@nestjs/graphql';
import { MercuriusDriver, MercuriusDriverConfig } from '@nestjs/mercurius';
import { TicketModule } from './ticket/ticket.module';
import { TicketPortalModule } from './ticketPortal/ticketPortal.module';

@Module({
  imports: [
    GraphQLModule.forRoot<MercuriusDriverConfig>({
      driver: MercuriusDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    TicketModule,
    TicketPortalModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
