import { EventLocationMeta } from './eventlocation.meta';
import { Location } from './location.entity';

export interface EventLocation extends Location {
  BuildingInfo?: string
}