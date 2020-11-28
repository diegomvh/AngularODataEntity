import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { MultiValueLegacyExtendedProperty } from './multivaluelegacyextendedproperty.entity';
import { MultiValueLegacyExtendedPropertyModel } from './multivaluelegacyextendedproperty.model';
import { MultiValueLegacyExtendedPropertyCollection } from './multivaluelegacyextendedproperty.collection';
//#endregion

export const MultiValueLegacyExtendedPropertyConfig = {
  name: "multiValueLegacyExtendedProperty",
  base: "microsoft.graph.entity",
  model: MultiValueLegacyExtendedPropertyModel,
  collection: MultiValueLegacyExtendedPropertyCollection,
  annotations: [],
  fields: {
    value: {type: 'Edm.String', collection: true}
  }
} as EntityConfig<MultiValueLegacyExtendedProperty>;