import { Photo, PhotoSchema } from './photo.interface';
import { PlanItem, PlanItemSchema } from './planitem.interface';

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
  TripId: {type: 'number', isKey: true, ref: 'TripId'},
  ShareId: {type: 'string'},
  Description: {type: 'string'},
  Name: {type: 'string'},
  Budget: {type: 'number'},
  StartsAt: {type: 'Date'},
  EndsAt: {type: 'Date'},
  Tags: {type: 'string', isCollection: true},
  Photos: {type: 'Microsoft.OData.SampleService.Models.TripPin.Photo', isNullable: true, isCollection: true, isNavigation: true},
  PlanItems: {type: 'Microsoft.OData.SampleService.Models.TripPin.PlanItem', isNullable: true, isCollection: true, isNavigation: true}
};