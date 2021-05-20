import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { Airport } from './airport.entity';
import { AirportModel } from './airport.model';
import { AirportCollection } from './airport.collection';
//#endregion

//#region ODataApi StrucutredTypeConfig
export const AirportEntityConfig = {
  name: "Airport",
  model: AirportModel,
  collection: AirportCollection,
  keys: [{ref: 'IcaoCode'}],
  fields: {
    IcaoCode: {type: 'Edm.String', nullable: false, annotations: [{"type":"Org.OData.Core.V1.Permissions","permissions":["Org.OData.Core.V1.Permission/Read"]}]},
    Name: {type: 'Edm.String', nullable: false},
    IataCode: {type: 'Edm.String', nullable: false, annotations: [{"type":"Org.OData.Core.V1.Immutable","bool":true}]},
    Location: {type: 'Microsoft.OData.SampleService.Models.TripPin.AirportLocation', nullable: false}
  }
} as StructuredTypeConfig<Airport>;
//#endregion