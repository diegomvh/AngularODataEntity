import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceConfigurationModel } from './deviceconfiguration.model';
import { EditionUpgradeLicenseType } from './editionupgradelicensetype.enum';
import { Windows10EditionType } from './windows10editiontype.enum';
import { EditionUpgradeConfiguration } from './editionupgradeconfiguration.entity';
import { EditionUpgradeConfigurationCollection } from './editionupgradeconfiguration.collection';
//#endregion

export class EditionUpgradeConfigurationModel<E extends EditionUpgradeConfiguration> extends DeviceConfigurationModel<E> {
  //#region ODataApi Properties
  license?: string;
  licenseType: EditionUpgradeLicenseType;
  productKey?: string;
  targetEdition: Windows10EditionType;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}