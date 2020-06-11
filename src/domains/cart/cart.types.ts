export enum OfferType {
  MINUS = 'minus',
  PERCENTAGE = 'percentage',
  SLICE = 'slice',
}

export interface MinusOffer {
  type: typeof OfferType.MINUS;
  value: number;
}

export interface PercentageOffer {
  type: typeof OfferType.PERCENTAGE;
  value: number;
}

export interface SliceOffer {
  type: typeof OfferType.SLICE;
  value: number;
  sliceValue: number;
}

export type Offer = MinusOffer | PercentageOffer | SliceOffer;

export interface Offers {
  offers: Offer[];
}
