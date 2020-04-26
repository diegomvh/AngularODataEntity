import { LocationMeta } from './location.meta';
import { CityMeta } from './city.meta';
import { City } from './city.entity';

export interface Location {
  Address: string;
  City: City
}