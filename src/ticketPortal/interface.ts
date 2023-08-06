export interface GetSessionKeyApiResponse {
  SessionKey: string;
}

export interface GetWebSessionApiResponse {
  OrderId: number;
  IsLoggedIn: boolean;
  ModeOfSaleId: number;
  OriginalModeOfSaleId: number;
  SourceId: number;
  LoginInfo: {
    ConstituentId: number;
    OriginalConstituentId: number;
    UserId: string;
    Status: string;
    FailedAttempts: number;
    LockedDate: Date | null;
    ElectronicAddress: number;
  };
  CartInfo: {
    PerformanceCount: number;
    PackageCount: number;
    ContributionCount: number;
    MembershipCount: number;
    UserDefinedFeeCount: number;
    GiftCertificateCount: number;
    PaymentCount: number;
    FirstSeatAddedDateTime: Date | null;
  };
  BusinessFacing: boolean;
  IsGuest: boolean;
  CheckoutStatus: {
    Status: string;
    Date: Date | null;
  };
  HasLockedSeats: boolean;
  SeatsExpired: boolean;
}

export interface GetPriceApiResponse {
  PerformanceId: number;
  PackageId: number;
  ZoneId: number;
  PriceTypeId: number;
  Price: number;
  Enabled: boolean;
  IsEditable: boolean;
  LayerTypeId: number | null;
  IsEditableForWeb: boolean;
  EditableMinPrice: number;
  IsBase: boolean;
  ParentPackageId: number;
  PerformancePriceTypeId: number;
  MinPrice: number;
  IsBest: boolean;
  Offer: boolean;
  ModeOfSaleOfferId: number;
}

export interface GetSeatsApiResponse {
  Id: number;
  SectionId: number;
  SeatRow: string;
  SeatNumber: number;
  ZoneId: number;
  AllocationId: number;
  SeatTypeId: number;
  LogicalSeatRow: number;
  LogicalSeatNumber: number;
  XPosition: number;
  YPosition: number;
  IsSeat: boolean;
  SeatStatusId: number;
  AisleIndicator: string;
  HasStairs: boolean;
  ScreenId: number;
  DisplayLetter: string;
  HoldCodeId: number;
}

export interface GetSectionsApiResponse {
  AdditionalText: string;
  AdditionalText2: string;
  CreatedDateTime: Date | null;
  CreateLocation: Date | null;
  CreatedBy: Date | null;
  Description: string;
  Id: number;
  UpdatedDateTime: Date;
  UpdatedBy: string;
  PrintDesc: string;
  PrintSequence: number;
  SectionLegend: string;
  ShortDesc: string;
}

export interface GetPerformanceInfoApiResponse {
  AvailSaleIndicator: boolean;
  BestSeatMap: {
    Id: number;
    Description: string;
    GaIndicator: string;
    IsGA: boolean;
  };
  BudgetAmount: null;
  Campaign: {
    AutoRestrictContributionsBeforeStartDate: boolean;
    Type: string;
    Id: number;
    CategoryId: number;
    ControlGroup: {
      Description: string;
      Id: number;
      Inactive: boolean;
    };
    CreatedDateTime: Date;
    CreateLocation: string;
    CreatedBy: string;
    Description: string;
    EndDateTime: null;
    EventDateTime: null;
    EventExpense: null;
    EventMinimumAmount: null;
    FYear: number;
    GiftAmount: number;
    GoalAmount: null;
    Inactive: boolean;
    UpdatedDateTime: Date;
    UpdatedBy: string;
    MembershipIncludesMatchingGifts: string;
    MinimumPledgeAmount: null;
    Notes: null;
    NumSuccessCust: number;
    NumTargetCust: number;
    NumTickets: null;
    PledgeReceivedAmount: number;
    PledgeAmount: number;
    SingleOpenPledgeIndicator: null;
    StartDateTime: Date;
    Status: string;
    TotalTicketIncome: number;
    EditIndicator: boolean;
  };
  DefaultEndSaleDateTime: Date;
  DefaultStartSaleDateTime: Date;
  DoorsClose: null;
  DoorsOpen: null;
  Duration: null;
  Facility: {
    Description: string;
    Id: number;
    SeatMap: {
      Description: string;
      Id: number;
    };
  };
  Code: string;
  Date: Date;
  Id: number;
  Status: {
    Id: number;
    Description: string;
  };
  Type: {
    Id: number;
    Description: string;
    Inactive: boolean;
  };
  ProductionSeason: {
    Production: {
      Id: number;
      Description: string;
    };
    Id: number;
    Description: string;
    Season: {
      Id: number;
      Description: string;
      FYear: number;
      Inactive: boolean;
    };
  };
  PublishClientEndDate: null;
  PublishClientStartDate: null;
  PublishWebApiEndDate: Date;
  PublishWebApiStartDate: Date;
  RankType: {
    Id: number;
    Description: string;
    Inactive: boolean;
    ControlGroup: {
      Description: string;
      Id: number;
      Inactive: boolean;
    };
  };
  SalesNotes: null;
  SalesNotesRequired: boolean;
  Season: {
    Id: number;
    Description: string;
    FYear: number;
    Inactive: boolean;
  };
  TimeSlot: {
    Id: number;
    Description: string;
    Inactive: boolean;
  };
  TvIndicator: null;
  ZoneMap: {
    Description: string;
    Id: number;
    Inactive: boolean;
    SeatMap: {
      Description: string;
      Id: number;
    };
  };
  CreatedDateTime: Date;
  CreateLocation: string;
  CreatedBy: string;
  UpdatedDateTime: Date;
  UpdatedBy: string;
  EditIndicator: boolean;
  Description: string;
  ShortName: string;
  Text1: string;
  Text2: string;
  Text3: string;
  Text4: string;
}
