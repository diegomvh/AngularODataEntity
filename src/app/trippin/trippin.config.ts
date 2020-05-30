//#region ODataApi Imports
import { TripPinSchema } from './Microsoft/OData/SampleService/Models/TripPin/trippin.schema';
//#endregion

export const TripPinConfig = {
  serviceRootUrl: 'https://services.odata.org/V4/TripPinServiceRW/',
  creation: new Date('2020-05-29T23:34:22.6562909-03:00'),
  schemas: {
    'Microsoft.OData.SampleService.Models.TripPin': TripPinSchema}
}