﻿import { Configuration, EDM_PARSERS } from 'angular-odata';

//#region ODataApi Imports
import { TripPinSchema } from './Microsoft/OData/SampleService/Models/TripPin/trippin.schema';
//#endregion

export const TripPinConfig = {
  name: 'TripPin',
  serviceRootUrl: 'https://services.odata.org/V4/TripPinServiceRW/',
  version: '4.0',
  creation: new Date('2020-08-02T19:13:22.6071985-03:00'),
  schemas: [
    TripPinSchema
  ],
  parsers: EDM_PARSERS
} as Configuration;