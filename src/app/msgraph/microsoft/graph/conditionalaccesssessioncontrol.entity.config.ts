import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ConditionalAccessSessionControl } from './conditionalaccesssessioncontrol.entity';
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
} as EntityConfig<ConditionalAccessSessionControl>;