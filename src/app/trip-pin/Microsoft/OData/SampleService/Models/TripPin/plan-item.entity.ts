import { Duration } from 'angular-odata';

export const PlanItemEntityType = 'Microsoft.OData.SampleService.Models.TripPin.PlanItem';
export interface PlanItem {
  PlanItemId: number;
  ConfirmationCode: string;
  StartsAt: Date;
  EndsAt: Date;
  Duration: Duration;
}
