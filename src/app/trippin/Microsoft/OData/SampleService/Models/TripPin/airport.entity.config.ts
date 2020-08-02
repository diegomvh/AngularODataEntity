import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Airport } from './airport.entity';
//#endregion

export const AirportConfig = {
  name: "Airport",
  annotations: [],
  fields: {
    icaoCode: {name: 'IcaoCode', type: 'Edm.String', key: true, ref: 'icaoCode', nullable: false, annotations: [{"type":"Org.OData.Core.V1.Permissions","permissions":["Org.OData.Core.V1.Permission/Read"]}]},
    name: {name: 'Name', type: 'Edm.String', nullable: false},
    iataCode: {name: 'IataCode', type: 'Edm.String', nullable: false, annotations: [{"type":"Org.OData.Core.V1.Immutable","bool":true}]},
    location: {name: 'Location', type: 'Microsoft.OData.SampleService.Models.TripPin.AirportLocation', nullable: false}
  }
} as EntityConfig<Airport>;