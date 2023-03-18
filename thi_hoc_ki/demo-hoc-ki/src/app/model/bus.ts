import {BusType} from "./bus-type";

export interface Bus {
  id?: number;
  soXe?: string;
  nhaXe?: string;
  diemDi?: string;
  diemDen?: string;
  soDienThoai?: string;
  email?: string;
  gioDi?: string;
  gioDen?: string;
  busType?: BusType;
}
