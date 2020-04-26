import { AirportMeta } from './airport.meta';
import { AirportLocationMeta } from './airportlocation.meta';
import { AirportLocation } from './airportlocation.entity';

export interface Airport {
  IcaoCode: string;
  Name: string;
  IataCode: string;
  Location: AirportLocation
}