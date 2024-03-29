﻿//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Location } from './location.complex';
import { LocationModel } from './location.model';
import { LocationCollection } from './location.collection';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const LocationComplexConfig = {
  name: 'Location',
  open: true,
  model: LocationModel,
  collection: LocationCollection,
  fields: {
    Address: {type: 'Edm.String', nullable: false},
    City: {type: 'Microsoft.OData.SampleService.Models.TripPin.City', nullable: false}
  }
} as StructuredTypeConfig<Location>;
//#endregion