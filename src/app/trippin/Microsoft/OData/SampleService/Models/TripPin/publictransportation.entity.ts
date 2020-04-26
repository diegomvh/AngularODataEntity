import { PublicTransportationMeta } from './publictransportation.meta';
import { PlanItem } from './planitem.entity';
import { PlanItemMeta } from './planitem.meta';

export interface PublicTransportation extends PlanItem {
  SeatNumber?: string
}