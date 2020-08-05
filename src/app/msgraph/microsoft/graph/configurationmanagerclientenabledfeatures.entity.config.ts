import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ConfigurationManagerClientEnabledFeatures } from './configurationmanagerclientenabledfeatures.entity';
//#endregion

export const ConfigurationManagerClientEnabledFeaturesConfig = {
  name: "configurationManagerClientEnabledFeatures",
  annotations: [],
  fields: {
    inventory: {type: 'Edm.Boolean', nullable: false},
    modernApps: {type: 'Edm.Boolean', nullable: false},
    resourceAccess: {type: 'Edm.Boolean', nullable: false},
    deviceConfiguration: {type: 'Edm.Boolean', nullable: false},
    compliancePolicy: {type: 'Edm.Boolean', nullable: false},
    windowsUpdateForBusiness: {type: 'Edm.Boolean', nullable: false}
  }
} as EntityConfig<ConfigurationManagerClientEnabledFeatures>;