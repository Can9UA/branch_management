export interface Branch {
  id: number;
  name: string;
  address: string;
  'map-address'?: string;
  description?: string;
  employees?: Object[];
  building?: string;
}