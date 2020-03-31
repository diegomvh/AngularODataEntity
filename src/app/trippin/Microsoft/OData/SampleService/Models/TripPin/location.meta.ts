import { CityMeta } from './city.meta';

export const LocationMeta = {
  type: "Microsoft.OData.SampleService.Models.TripPin.Location",
  fields: {
    Address: {type: 'string', nullable: false},
    City: {type: 'Microsoft.OData.SampleService.Models.TripPin.City', nullable: false}
  }
};