import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceConfigurationModel } from './deviceconfiguration.model';
import { AppListType } from './applisttype.enum';
import { RequiredPasswordType } from './requiredpasswordtype.enum';
import { AppListItem } from './applistitem.complex';
import { MacOSGeneralDeviceConfiguration } from './macosgeneraldeviceconfiguration.entity';
import { AppListItemModel } from './applistitem.model';
import { AppListItemCollection } from './applistitem.collection';
import { MacOSGeneralDeviceConfigurationCollection } from './macosgeneraldeviceconfiguration.collection';
//#endregion

export class MacOSGeneralDeviceConfigurationModel<E extends MacOSGeneralDeviceConfiguration> extends DeviceConfigurationModel<E> {
  //#region ODataApi Properties
  compliantAppListType: AppListType;
  compliantAppsList?: AppListItemCollection<AppListItem, AppListItemModel<AppListItem>>;
  emailInDomainSuffixes?: string[];
  passwordBlockSimple: boolean;
  passwordExpirationDays?: number;
  passwordMinimumCharacterSetCount?: number;
  passwordMinimumLength?: number;
  passwordMinutesOfInactivityBeforeLock?: number;
  passwordMinutesOfInactivityBeforeScreenTimeout?: number;
  passwordPreviousPasswordBlockCount?: number;
  passwordRequired: boolean;
  passwordRequiredType: RequiredPasswordType;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}