import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DeviceConfiguration } from './deviceconfiguration.entity';
import { EditionUpgradeLicenseType } from './editionupgradelicensetype.enum';
import { Windows10EditionType } from './windows10editiontype.enum';
import { DeviceConfigurationModel } from './deviceconfiguration.model';
import { DeviceConfigurationCollection } from './deviceconfiguration.collection';
//#endregion

export interface EditionUpgradeConfiguration extends DeviceConfiguration {
  //#region ODataApi Properties
  license?: string;
  licenseType: EditionUpgradeLicenseType;
  productKey?: string;
  targetEdition: Windows10EditionType;
  //#endregion
}