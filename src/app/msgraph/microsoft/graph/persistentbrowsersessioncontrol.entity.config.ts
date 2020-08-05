import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { PersistentBrowserSessionControl } from './persistentbrowsersessioncontrol.entity';
//#endregion

export const PersistentBrowserSessionControlConfig = {
  name: "PersistentBrowserSessionControl",
  base: "microsoft.graph.conditionalAccessSessionControl",
  annotations: [],
  fields: {
    mode: {type: 'graph.persistentBrowserSessionMode'}
  }
} as EntityConfig<PersistentBrowserSessionControl>;