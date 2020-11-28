import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { IosCustomConfiguration } from './ioscustomconfiguration.entity';
import { IosCustomConfigurationModel } from './ioscustomconfiguration.model';
import { IosCustomConfigurationCollection } from './ioscustomconfiguration.collection';
//#endregion

export const IosCustomConfigurationConfig = {
  name: "iosCustomConfiguration",
  base: "microsoft.graph.deviceConfiguration",
  model: IosCustomConfigurationModel,
  collection: IosCustomConfigurationCollection,
  annotations: [],
  fields: {
    payload: {type: 'Edm.Binary', nullable: false},
    payloadFileName: {type: 'Edm.String'},
    payloadName: {type: 'Edm.String', nullable: false}
  }
} as StructuredTypeConfig<IosCustomConfiguration>;