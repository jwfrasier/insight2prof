interface AddressMatch {
  tigerLine: {
    side: string;
    tigerLineId: string;
  };
  coordinates: {
    x: number;
    y: number;
  };
  addressComponents: {
    zip: string;
    streetName: string;
    preType: string;
    city: string;
    preDirection: string;
    suffixDirection: string;
    fromAddress: string;
    state: string;
    suffixType: string;
    toAddress: string;
    suffixQualifier: string;
    preQualifier: string;
  };
  matchedAddress: string;
}

interface Benchmark {
  isDefault: boolean;
  benchmarkDescription: string;
  id: string;
  benchmarkName: string;
}

interface Input {
  address: {
    zip: string;
    city: string;
    street: string;
    state: string;
  };
  benchmark: Benchmark;
}

interface Result {
  input: Input;
  addressMatches: AddressMatch[];
}

export interface GeocodingResponse {
  result: Result;
}

type AddressComponents = {
  city: string;
  fromAddress: string;
  preDirection: string;
  preQualifier: string;
  preType: string;
  state: string;
  streetName: string;
  suffixDirection: string;
  suffixQualifier: string;
  suffixType: string;
  toAddress: string;
  zip: string;
};

type Coordinates = {
  x: number;
  y: number;
};

type TigerLine = {
  side: string;
  tigerLineId: string;
};

export type Data = {
  addressComponents: AddressComponents;
  coordinates: Coordinates;
  matchedAddress: string;
  tigerLine: TigerLine;
};
