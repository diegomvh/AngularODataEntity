import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { NamedLocation } from './namedlocation.entity';
//#endregion

export const NamedLocationConfig = {
  name: "NamedLocation",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    displayName: {type: 'Edm.String', nullable: false},
    createdDateTime: {type: 'Edm.DateTimeOffset'},
    modifiedDateTime: {type: 'Edm.DateTimeOffset'}
  }
} as EntityConfig<NamedLocation>;