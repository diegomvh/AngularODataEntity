import { PlanItem, PlanItemSchema } from './planitem.interface';

export interface PublicTransportation extends PlanItem {
  SeatNumber?: string
}

export const PublicTransportationSchema = Object.assign({}, PlanItemSchema, {
  SeatNumber: {type: 'string'}
});