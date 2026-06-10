

import { Location } from './location.complex';

// #region Custom
// #endregion Custom
export const EventLocationComplexType = 'Microsoft.OData.SampleService.Models.TripPin.EventLocation';
export interface EventLocation extends Location {
  BuildingInfo: string;
// #region Custom
// #endregion Custom
}
