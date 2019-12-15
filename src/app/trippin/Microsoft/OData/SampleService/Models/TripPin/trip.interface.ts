import { Photo, PhotoSchema } from './photo.interface';
import { PlanItem, PlanItemSchema } from './planitem.interface';

export interface Trip {
  TripId: number;
  ShareId?: string;
  Description?: string;
  Name: string;
  Budget: number;
  StartsAt: Date;
  EndsAt: Date;
  Tags: string[];
  Photos?: Photo[];
  PlanItems?: PlanItem[]
}

export const TripSchema = {
  TripId: {type: 'number', key: true, ref: 'TripId', nullable: false},
  ShareId: {type: 'string'},
  Description: {type: 'string'},
  Name: {type: 'string', nullable: false},
  Budget: {type: 'number', nullable: false},
  StartsAt: {type: 'Date', nullable: false},
  EndsAt: {type: 'Date', nullable: false},
  Tags: {type: 'string', nullable: false, collection: true},
  Photos: {type: 'Microsoft.OData.SampleService.Models.TripPin.Photo', collection: true, navigation: true},
  PlanItems: {type: 'Microsoft.OData.SampleService.Models.TripPin.PlanItem', collection: true, navigation: true}
};