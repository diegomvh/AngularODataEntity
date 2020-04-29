import { PlanItem } from './planitem.entity';

export interface PublicTransportation extends PlanItem {
  SeatNumber?: string
}