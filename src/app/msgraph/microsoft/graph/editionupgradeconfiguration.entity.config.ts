import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { EditionUpgradeConfiguration } from './editionupgradeconfiguration.entity';
//#endregion

export const EditionUpgradeConfigurationConfig = {
  name: "editionUpgradeConfiguration",
  base: "microsoft.graph.deviceConfiguration",
  annotations: [],
  fields: {
    licenseType: {type: 'graph.editionUpgradeLicenseType', nullable: false},
    targetEdition: {type: 'graph.windows10EditionType', nullable: false},
    license: {type: 'Edm.String'},
    productKey: {type: 'Edm.String'}
  }
} as EntityConfig<EditionUpgradeConfiguration>;