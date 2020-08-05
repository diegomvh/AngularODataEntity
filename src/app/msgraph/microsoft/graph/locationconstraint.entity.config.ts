import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { LocationConstraint } from './locationconstraint.entity';
//#endregion

export const LocationConstraintConfig = {
  name: "LocationConstraint",
  annotations: [],
  fields: {
    locations: {type: 'graph.locationConstraintItem', collection: true},
    isRequired: {type: 'Edm.Boolean'},
    suggestLocation: {type: 'Edm.Boolean'}
  }
} as EntityConfig<LocationConstraint>;