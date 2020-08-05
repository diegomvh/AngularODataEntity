import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DeviceConfiguration } from './deviceconfiguration.entity';
import { AppListType } from './applisttype.enum';
import { RequiredPasswordType } from './requiredpasswordtype.enum';
import { AppListItem } from './applistitem.entity';
//#endregion

export interface MacOSGeneralDeviceConfiguration extends DeviceConfiguration {
  //#region ODataApi Properties
  compliantAppsList?: AppListItem[];
  compliantAppListType: AppListType;
  emailInDomainSuffixes?: string[];
  passwordBlockSimple: boolean;
  passwordExpirationDays?: number;
  passwordMinimumCharacterSetCount?: number;
  passwordMinimumLength?: number;
  passwordMinutesOfInactivityBeforeLock?: number;
  passwordMinutesOfInactivityBeforeScreenTimeout?: number;
  passwordPreviousPasswordBlockCount?: number;
  passwordRequiredType: RequiredPasswordType;
  passwordRequired: boolean;
  //#endregion
}