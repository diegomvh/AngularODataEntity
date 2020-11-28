import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DeviceConfiguration } from './deviceconfiguration.entity';
import { AppListType } from './applisttype.enum';
import { RequiredPasswordType } from './requiredpasswordtype.enum';
import { AppListItem } from './applistitem.complex';
import { AppListItemModel } from './applistitem.model';
import { DeviceConfigurationModel } from './deviceconfiguration.model';
import { AppListItemCollection } from './applistitem.collection';
import { DeviceConfigurationCollection } from './deviceconfiguration.collection';
//#endregion

export interface MacOSGeneralDeviceConfiguration extends DeviceConfiguration {
  //#region ODataApi Properties
  compliantAppListType: AppListType;
  compliantAppsList?: AppListItem[];
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
}