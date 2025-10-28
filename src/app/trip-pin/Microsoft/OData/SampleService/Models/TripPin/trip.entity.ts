import { Duration } from 'angular-odata';

import { Photo } from './photo.entity';
import { PlanItem } from './plan-item.entity';

export const TripEntityType = 'Microsoft.OData.SampleService.Models.TripPin.Trip';
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
  PlanItems?: PlanItem[];
}
