import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { LocationConstraintItem } from './locationconstraintitem.entity';
import { LocationConstraintItemModel } from './locationconstraintitem.model';
import { LocationConstraintItemCollection } from './locationconstraintitem.collection';
//#endregion

export const LocationConstraintItemConfig = {
  name: "locationConstraintItem",
  base: "microsoft.graph.location",
  model: LocationConstraintItemModel,
  collection: LocationConstraintItemCollection,
  annotations: [],
  fields: {
    resolveAvailability: {type: 'Edm.Boolean'}
  }
} as EntityConfig<LocationConstraintItem>;