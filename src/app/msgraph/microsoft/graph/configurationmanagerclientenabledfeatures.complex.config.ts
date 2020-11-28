import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ConfigurationManagerClientEnabledFeatures } from './configurationmanagerclientenabledfeatures.complex';
import { ConfigurationManagerClientEnabledFeaturesModel } from './configurationmanagerclientenabledfeatures.model';
import { ConfigurationManagerClientEnabledFeaturesCollection } from './configurationmanagerclientenabledfeatures.collection';
//#endregion

export const ConfigurationManagerClientEnabledFeaturesConfig = {
  name: "configurationManagerClientEnabledFeatures",
  model: ConfigurationManagerClientEnabledFeaturesModel,
  collection: ConfigurationManagerClientEnabledFeaturesCollection,
  annotations: [],
  fields: {
    compliancePolicy: {type: 'Edm.Boolean', nullable: false},
    deviceConfiguration: {type: 'Edm.Boolean', nullable: false},
    inventory: {type: 'Edm.Boolean', nullable: false},
    modernApps: {type: 'Edm.Boolean', nullable: false},
    resourceAccess: {type: 'Edm.Boolean', nullable: false},
    windowsUpdateForBusiness: {type: 'Edm.Boolean', nullable: false}
  }
} as StructuredTypeConfig<ConfigurationManagerClientEnabledFeatures>;