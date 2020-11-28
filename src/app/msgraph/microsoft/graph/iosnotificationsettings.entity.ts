import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { IosNotificationAlertType } from './iosnotificationalerttype.enum';
//#endregion

export interface IosNotificationSettings {
  //#region ODataApi Properties
  alertType: IosNotificationAlertType;
  appName?: string;
  badgesEnabled?: boolean;
  bundleID: string;
  enabled?: boolean;
  publisher?: string;
  showInNotificationCenter?: boolean;
  showOnLockScreen?: boolean;
  soundsEnabled?: boolean;
  //#endregion
}