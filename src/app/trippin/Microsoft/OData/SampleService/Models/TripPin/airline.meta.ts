import { AirlinesService } from './airlines.service';

export const AirlineMeta = {
  type: "Microsoft.OData.SampleService.Models.TripPin.Airline",
  set: "Airlines",
  fields: {
    AirlineCode: {type: 'string', key: true, ref: 'AirlineCode', nullable: false},
    Name: {type: 'string', nullable: false}
  }
};