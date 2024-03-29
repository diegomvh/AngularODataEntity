﻿//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Airport } from './airport.entity';
import { AirportModel } from './airport.model';
import { AirportCollection } from './airport.collection';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const AirportEntityConfig = {
  name: 'Airport',
  model: AirportModel,
  collection: AirportCollection,
  keys: [{name: 'IcaoCode'}],
  fields: {
    IcaoCode: {type: 'Edm.String', nullable: false, annotations: [{"term":"Org.OData.Core.V1.Permissions","permissions":["Org.OData.Core.V1.Permission/Read"]}]},
    Name: {type: 'Edm.String', nullable: false},
    IataCode: {type: 'Edm.String', nullable: false, annotations: [{"term":"Org.OData.Core.V1.Immutable","bool":true}]},
    Location: {type: 'Microsoft.OData.SampleService.Models.TripPin.AirportLocation', nullable: false}
  }
} as StructuredTypeConfig<Airport>;
//#endregion