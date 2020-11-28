import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { SingleValueLegacyExtendedProperty } from './singlevaluelegacyextendedproperty.entity';
import { SingleValueLegacyExtendedPropertyModel } from './singlevaluelegacyextendedproperty.model';
import { SingleValueLegacyExtendedPropertyCollection } from './singlevaluelegacyextendedproperty.collection';
//#endregion

export const SingleValueLegacyExtendedPropertyConfig = {
  name: "singleValueLegacyExtendedProperty",
  base: "microsoft.graph.entity",
  model: SingleValueLegacyExtendedPropertyModel,
  collection: SingleValueLegacyExtendedPropertyCollection,
  annotations: [],
  fields: {
    value: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<SingleValueLegacyExtendedProperty>;