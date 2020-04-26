import { EventLocationMeta } from './eventlocation.meta';
import { Location } from './location.entity';
import { LocationMeta } from './location.meta';

export interface EventLocation extends Location {
  BuildingInfo?: string
}