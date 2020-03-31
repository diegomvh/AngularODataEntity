import { PublicTransportationMeta } from './publictransportation.meta';
import { PlanItem } from './planitem.entity';

export interface PublicTransportation extends PlanItem {
  SeatNumber?: string
}