import { EventMeta } from './event.meta';
import { PlanItem } from './planitem.entity';
import { EventLocationMeta } from './eventlocation.meta';
import { PlanItemMeta } from './planitem.meta';
import { EventLocation } from './eventlocation.entity';

export interface Event extends PlanItem {
  Description?: string;
  OccursAt: EventLocation
}