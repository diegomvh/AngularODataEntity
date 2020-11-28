import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { RegistryKeyState } from './registrykeystate.complex';
import { RegistryKeyStateModel } from './registrykeystate.model';
import { RegistryKeyStateCollection } from './registrykeystate.collection';
//#endregion

export const RegistryKeyStateConfig = {
  name: "registryKeyState",
  model: RegistryKeyStateModel,
  collection: RegistryKeyStateCollection,
  annotations: [],
  fields: {
    hive: {type: 'graph.registryHive'},
    key: {type: 'Edm.String'},
    oldKey: {type: 'Edm.String'},
    oldValueData: {type: 'Edm.String'},
    oldValueName: {type: 'Edm.String'},
    operation: {type: 'graph.registryOperation'},
    processId: {type: 'Edm.Int32'},
    valueData: {type: 'Edm.String'},
    valueName: {type: 'Edm.String'},
    valueType: {type: 'graph.registryValueType'}
  }
} as StructuredTypeConfig<RegistryKeyState>;