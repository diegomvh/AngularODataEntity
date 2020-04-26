import { AirportLocationMeta } from './airportlocation.meta';
import { Location } from './location.entity';
import { LocationMeta } from './location.meta';

export interface AirportLocation extends Location {
  Loc: any
}