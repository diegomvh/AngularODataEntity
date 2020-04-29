import { MetaEntity } from 'angular-odata';

import { Airport } from './airport.entity';

export const AirportMetaEntity = {
  type: "Microsoft.OData.SampleService.Models.TripPin.Airport",
  set: { 
    name: "Airports",
    annotations: [{"type":"Org.OData.Core.V1.ResourcePath"},{"type":"Org.OData.Capabilities.V1.SearchRestrictions"},{"type":"Org.OData.Capabilities.V1.InsertRestrictions"},{"type":"Org.OData.Capabilities.V1.DeleteRestrictions"}],
  },
  annotations: [{"type":"Org.OData.Core.V1.Permissions","permissions":["Org.OData.Core.V1.Permission/Read"]},{"type":"Org.OData.Core.V1.Immutable","bool":true}],
  fields: {
    IcaoCode: {type: 'string', key: true, ref: 'IcaoCode', nullable: false, annotations: [{"type":"Org.OData.Core.V1.Permissions","permissions":["Org.OData.Core.V1.Permission/Read"]}]},
    Name: {type: 'string', nullable: false},
    IataCode: {type: 'string', nullable: false, annotations: [{"type":"Org.OData.Core.V1.Immutable","bool":true}]},
    Location: {type: 'Microsoft.OData.SampleService.Models.TripPin.AirportLocation', nullable: false}
  }
} as MetaEntity<Airport>;