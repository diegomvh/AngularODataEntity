import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { NamedLocation } from './namedlocation.entity';
import { NamedLocationModel } from './namedlocation.model';
import { NamedLocationCollection } from './namedlocation.collection';
//#endregion

export const NamedLocationConfig = {
  name: "namedLocation",
  base: "microsoft.graph.entity",
  model: NamedLocationModel,
  collection: NamedLocationCollection,
  annotations: [],
  fields: {
    createdDateTime: {type: 'Edm.DateTimeOffset'},
    displayName: {type: 'Edm.String', nullable: false},
    modifiedDateTime: {type: 'Edm.DateTimeOffset'}
  }
} as StructuredTypeConfig<NamedLocation>;