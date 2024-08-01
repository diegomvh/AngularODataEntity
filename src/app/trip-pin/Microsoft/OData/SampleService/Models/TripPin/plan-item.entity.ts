import { Duration } from 'angular-odata';

export const PlanItemType = 'Microsoft.OData.SampleService.Models.TripPin.PlanItem';
export interface PlanItem {
  PlanItemId: number;
  ConfirmationCode: string;
  StartsAt: Date;
  EndsAt: Date;
  Duration: Duration;
}
