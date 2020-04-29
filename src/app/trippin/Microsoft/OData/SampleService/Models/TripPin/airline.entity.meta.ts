import { MetaEntity } from 'angular-odata';

import { Airline } from './airline.entity';

export const AirlineMetaEntity = {
  type: "Microsoft.OData.SampleService.Models.TripPin.Airline",
  set: { 
    name: "Airlines",
    annotations: [{"type":"Org.OData.Core.V1.ResourcePath"},{"type":"Org.OData.Capabilities.V1.SearchRestrictions"},{"type":"Org.OData.Capabilities.V1.InsertRestrictions"}],
  },
  annotations: [{"type":"Org.OData.Core.V1.Permissions","permissions":["Org.OData.Core.V1.Permission/Read"]}],
  fields: {
    AirlineCode: {type: 'string', key: true, ref: 'AirlineCode', nullable: false, annotations: [{"type":"Org.OData.Core.V1.Permissions","permissions":["Org.OData.Core.V1.Permission/Read"]}]},
    Name: {type: 'string', nullable: false}
  }
} as MetaEntity<Airline>;