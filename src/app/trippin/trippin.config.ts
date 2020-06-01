//#region ODataApi Imports
import { MicrosoftSchema } from './Microsoft/OData/SampleService/Models/TripPin/microsoft.schema';
//#endregion

export const TripPinConfig = {
  serviceRootUrl: 'https://services.odata.org/V4/TripPinServiceRW/',
  creation: new Date('2020-05-31T22:56:54.9148120-03:00'),
  schemas: [
    MicrosoftSchema
  ]
}