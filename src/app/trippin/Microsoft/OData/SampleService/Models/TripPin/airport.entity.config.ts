import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Airport } from './airport.entity';
//#endregion

export const AirportEntityConfig = {
  name: "Airport",
  annotations: [{"type":"Org.OData.Core.V1.Permissions","permissions":["Org.OData.Core.V1.Permission/Read"]},{"type":"Org.OData.Core.V1.Immutable","bool":true}],
  fields: {
    IcaoCode: {type: 'string', key: true, ref: 'IcaoCode', nullable: false, annotations: [{"type":"Org.OData.Core.V1.Permissions","permissions":["Org.OData.Core.V1.Permission/Read"]}]},
    Name: {type: 'string', nullable: false},
    IataCode: {type: 'string', nullable: false, annotations: [{"type":"Org.OData.Core.V1.Immutable","bool":true}]},
    Location: {type: 'Microsoft.OData.SampleService.Models.TripPin.AirportLocation', nullable: false}
  }
} as EntityConfig<Airport>;