export interface IResponse<T> {
  count:    number;
  next?:     string;
  previous?: string;
  results?:  T[];
}

export interface Pokemon {
  name: string;
  url:  string;
}

