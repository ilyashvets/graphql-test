import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import {
  GetPerformanceInfoApiResponse,
  GetPriceApiResponse,
  GetSeatsApiResponse,
  GetSectionsApiResponse,
  GetSessionKeyApiResponse,
  GetWebSessionApiResponse,
} from './interface';
import {
  GET_PERFORMANCE_INFO_URL,
  GET_PRICE_URL,
  GET_SECTIONS_URL,
  GET_SESSION_KEY_URL,
  GET_WEB_SESSION_URL,
} from './constants';

@Injectable()
export class TicketPortalService {
  constructor(private readonly httpService: HttpService) {}

  async getTicketInfo(performanceId: number): Promise<{
    seats: GetSeatsApiResponse[];
    sections: Map<number, string>;
    prices: Map<number, number>;
  }> {
    const sessionKey = await this.getSessionKey();

    const [performanceInfo, { modeOfSaleId, sourceId }] = await Promise.all([
      this.getPerformanceInfo({ performanceId }),
      this.getWebSession(sessionKey),
    ]);

    if (!performanceInfo.Id) throw new Error('Performance not found');

    const [prices, seats, sections] = await Promise.all([
      this.getPrices({
        modeOfSaleId,
        sourceId,
        performanceId,
      }),
      this.getSeats({ modeOfSaleId, performanceId }),
      this.getSections({ seatMapId: performanceInfo.ZoneMap.SeatMap.Id }),
    ]);

    return { seats, sections, prices };
  }

  private async getSessionKey(): Promise<string> {
    return new Promise((resolve) => {
      this.httpService
        .post(GET_SESSION_KEY_URL)
        .subscribe(({ data }: AxiosResponse<GetSessionKeyApiResponse>) => {
          resolve(data.SessionKey);
        });
    });
  }

  private async getWebSession(token: string): Promise<{
    modeOfSaleId: number;
    sourceId: number;
  }> {
    return new Promise((resolve) => {
      this.httpService
        .get(GET_WEB_SESSION_URL + `/${token}`)
        .subscribe(({ data }: AxiosResponse<GetWebSessionApiResponse>) => {
          resolve({
            modeOfSaleId: data.ModeOfSaleId,
            sourceId: data.SourceId,
          });
        });
    });
  }

  private async getPrices({
    performanceId,
    modeOfSaleId,
    sourceId,
  }: {
    performanceId: number;
    modeOfSaleId: number;
    sourceId: number;
  }): Promise<Map<number, number>> {
    return new Promise((resolve) => {
      const priceByZone = new Map<number, number>();
      this.httpService
        .get(GET_PRICE_URL, {
          params: {
            expandPerformancePriceType: '',
            includeOnlyBasePrice: '',
            priceTypeId: '',
            performanceIds: performanceId,
            modeOfSaleId,
            sourceId,
          },
        })
        .subscribe(({ data }: AxiosResponse<GetPriceApiResponse[]>) => {
          data.forEach((price) => {
            priceByZone.set(price.ZoneId, price.Price);
          });
          resolve(priceByZone);
        });
    });
  }

  private async getSeats({
    modeOfSaleId,
    performanceId,
  }: {
    modeOfSaleId: number;
    performanceId: number;
  }): Promise<GetSeatsApiResponse[]> {
    return new Promise((resolve) => {
      this.httpService
        .get(GET_PERFORMANCE_INFO_URL + `/${performanceId}/Seats`, {
          params: {
            constituentId: 0,
            performanceId,
            modeOfSaleId,
          },
        })
        .subscribe(({ data }: AxiosResponse<GetSeatsApiResponse[]>) => {
          resolve(data);
        });
    });
  }

  private async getPerformanceInfo({
    performanceId,
  }: {
    performanceId: number;
  }): Promise<GetPerformanceInfoApiResponse> {
    return new Promise((resolve) => {
      this.httpService
        .get(GET_PERFORMANCE_INFO_URL + `/${performanceId}`)
        .subscribe(({ data }: AxiosResponse<GetPerformanceInfoApiResponse>) => {
          resolve(data);
        });
    });
  }

  async getSections({
    seatMapId,
  }: {
    seatMapId: number;
  }): Promise<Map<number, string>> {
    const sections = new Map<number, string>();

    return new Promise((resolve) => {
      this.httpService
        .get(GET_SECTIONS_URL, {
          params: {
            seatMapId,
          },
        })
        .subscribe(({ data }: AxiosResponse<GetSectionsApiResponse[]>) => {
          data.forEach((section) => {
            sections.set(section.Id, section.Description);
          });
          resolve(sections);
        });
    });
  }
}
