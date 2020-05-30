import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Airline } from './airline.entity';
//#endregion

export const AirlineConfig = {
  name: "Airline",
  annotations: [{"type":"Org.OData.Core.V1.Permissions","permissions":["Org.OData.Core.V1.Permission/Read"]}],
  fields: {
    AirlineCode: {type: 'string', key: true, ref: 'AirlineCode', nullable: false, annotations: [{"type":"Org.OData.Core.V1.Permissions","permissions":["Org.OData.Core.V1.Permission/Read"]}]},
    Name: {type: 'string', nullable: false}
  }
} as EntityConfig<Airline>;