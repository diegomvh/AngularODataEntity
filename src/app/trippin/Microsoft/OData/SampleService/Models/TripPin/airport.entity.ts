import { AirportMeta } from './airport.meta';
import { AirportsService } from './airports.service';
import { AirportLocation } from './airportlocation.entity';

export interface Airport {
  IcaoCode: string;
  Name: string;
  IataCode: string;
  Location: AirportLocation
}