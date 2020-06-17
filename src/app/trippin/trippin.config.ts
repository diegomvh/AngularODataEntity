//#region ODataApi Imports
import { TripPinSchema } from './Microsoft/OData/SampleService/Models/TripPin/trippin.schema';
//#endregion

export const TripPinConfig = {
  name: 'TripPin',
  serviceRootUrl: 'https://services.odata.org/V4/TripPinServiceRW/',
  creation: new Date('2020-06-16T22:01:37.8214752-03:00'),
  schemas: [
    TripPinSchema
  ]
}