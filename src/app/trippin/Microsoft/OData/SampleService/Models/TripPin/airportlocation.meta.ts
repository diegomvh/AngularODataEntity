import { LocationMeta } from './location.meta';

export const AirportLocationMeta = {
  type: "Microsoft.OData.SampleService.Models.TripPin.AirportLocation",
  base: "Microsoft.OData.SampleService.Models.TripPin.Location",
  fields: {
    Loc: {type: 'Object', nullable: false, srid: 4326}
  }
};