import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { EditionUpgradeConfiguration } from './editionupgradeconfiguration.entity';
import { EditionUpgradeConfigurationModel } from './editionupgradeconfiguration.model';
import { EditionUpgradeConfigurationCollection } from './editionupgradeconfiguration.collection';
//#endregion

export const EditionUpgradeConfigurationConfig = {
  name: "editionUpgradeConfiguration",
  base: "microsoft.graph.deviceConfiguration",
  model: EditionUpgradeConfigurationModel,
  collection: EditionUpgradeConfigurationCollection,
  annotations: [],
  fields: {
    license: {type: 'Edm.String'},
    licenseType: {type: 'graph.editionUpgradeLicenseType', nullable: false},
    productKey: {type: 'Edm.String'},
    targetEdition: {type: 'graph.windows10EditionType', nullable: false}
  }
} as EntityConfig<EditionUpgradeConfiguration>;