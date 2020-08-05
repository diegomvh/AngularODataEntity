import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { MultiValueLegacyExtendedProperty } from './multivaluelegacyextendedproperty.entity';
//#endregion

export const MultiValueLegacyExtendedPropertyConfig = {
  name: "multiValueLegacyExtendedProperty",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    value: {type: 'Edm.String', collection: true}
  }
} as EntityConfig<MultiValueLegacyExtendedProperty>;