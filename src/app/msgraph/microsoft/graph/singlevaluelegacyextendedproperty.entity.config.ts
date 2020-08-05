import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { SingleValueLegacyExtendedProperty } from './singlevaluelegacyextendedproperty.entity';
//#endregion

export const SingleValueLegacyExtendedPropertyConfig = {
  name: "singleValueLegacyExtendedProperty",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    value: {type: 'Edm.String'}
  }
} as EntityConfig<SingleValueLegacyExtendedProperty>;