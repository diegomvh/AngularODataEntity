import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { IosCustomConfiguration } from './ioscustomconfiguration.entity';
//#endregion

export const IosCustomConfigurationConfig = {
  name: "IosCustomConfiguration",
  base: "microsoft.graph.deviceConfiguration",
  annotations: [],
  fields: {
    payloadName: {type: 'Edm.String', nullable: false},
    payloadFileName: {type: 'Edm.String'},
    payload: {type: 'Edm.Binary', nullable: false}
  }
} as EntityConfig<IosCustomConfiguration>;