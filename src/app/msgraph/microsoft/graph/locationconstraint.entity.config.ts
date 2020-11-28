import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { LocationConstraint } from './locationconstraint.entity';
import { LocationConstraintModel } from './locationconstraint.model';
import { LocationConstraintCollection } from './locationconstraint.collection';
//#endregion

export const LocationConstraintConfig = {
  name: "locationConstraint",
  model: LocationConstraintModel,
  collection: LocationConstraintCollection,
  annotations: [],
  fields: {
    isRequired: {type: 'Edm.Boolean'},
    locations: {type: 'graph.locationConstraintItem', collection: true},
    suggestLocation: {type: 'Edm.Boolean'}
  }
} as EntityConfig<LocationConstraint>;