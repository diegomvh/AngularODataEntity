import { Photo, PhotoSchema } from './photo.entity';
import { PlanItem, PlanItemSchema } from './planitem.entity';

export interface Trip {
  TripId: number;
  ShareId: string;
  Description: string;
  Name: string;
  Budget: number;
  StartsAt: Date;
  EndsAt: Date;
  Tags: string[];
  Photos?: Photo[];
  PlanItems?: PlanItem[]
}

export const TripSchema = {
  
  keys: [ 
    {name: 'TripId'}
  ],
  fields: [
    {name: 'TripId', type: 'number'},
    {name: 'ShareId', type: 'string'},
    {name: 'Description', type: 'string'},
    {name: 'Name', type: 'string'},
    {name: 'Budget', type: 'number'},
    {name: 'StartsAt', type: 'Date'},
    {name: 'EndsAt', type: 'Date'},
    {name: 'Tags', type: 'string', isCollection: true},
    {name: 'Photos', type: 'Microsoft.OData.SampleService.Models.TripPin.Photo', isNullable: true, isCollection: true, isNavigation: true},
    {name: 'PlanItems', type: 'Microsoft.OData.SampleService.Models.TripPin.PlanItem', isNullable: true, isCollection: true, isNavigation: true}
  ]
};