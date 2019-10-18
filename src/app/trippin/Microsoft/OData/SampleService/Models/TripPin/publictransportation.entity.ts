import { PlanItem, PlanItemSchema } from './planitem.entity';

export interface PublicTransportation extends PlanItem {
  SeatNumber: string
}

export const PublicTransportationSchema = {
  base: 'Microsoft.OData.SampleService.Models.TripPin.PlanItem',
  keys: [ 
    
  ],
  fields: [
    {name: 'SeatNumber', type: 'string'}
  ]
};