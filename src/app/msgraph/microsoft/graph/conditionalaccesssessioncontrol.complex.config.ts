import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ConditionalAccessSessionControl } from './conditionalaccesssessioncontrol.complex';
import { ConditionalAccessSessionControlModel } from './conditionalaccesssessioncontrol.model';
import { ConditionalAccessSessionControlCollection } from './conditionalaccesssessioncontrol.collection';
//#endregion

export const ConditionalAccessSessionControlConfig = {
  name: "conditionalAccessSessionControl",
  model: ConditionalAccessSessionControlModel,
  collection: ConditionalAccessSessionControlCollection,
  annotations: [],
  fields: {
    isEnabled: {type: 'Edm.Boolean'}
  }
} as StructuredTypeConfig<ConditionalAccessSessionControl>;