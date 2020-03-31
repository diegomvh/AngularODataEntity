import { EventMeta } from './event.meta';
import { PlanItem } from './planitem.entity';
import { EventLocation } from './eventlocation.entity';

export interface Event extends PlanItem {
  Description?: string;
  OccursAt: EventLocation
}