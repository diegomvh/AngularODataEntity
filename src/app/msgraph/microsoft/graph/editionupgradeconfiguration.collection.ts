import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceConfigurationCollection } from './deviceconfiguration.collection';
import { EditionUpgradeLicenseType } from './editionupgradelicensetype.enum';
import { Windows10EditionType } from './windows10editiontype.enum';
import { EditionUpgradeConfiguration } from './editionupgradeconfiguration.entity';
import { EditionUpgradeConfigurationModel } from './editionupgradeconfiguration.model';
//#endregion

export class EditionUpgradeConfigurationCollection<E extends EditionUpgradeConfiguration, M extends EditionUpgradeConfigurationModel<E>> extends DeviceConfigurationCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}