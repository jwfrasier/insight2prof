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
