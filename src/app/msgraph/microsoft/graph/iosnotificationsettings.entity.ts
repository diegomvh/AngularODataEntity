import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { IosNotificationAlertType } from './iosnotificationalerttype.enum';
//#endregion

export interface IosNotificationSettings {
  //#region ODataApi Properties
  bundleID: string;
  appName?: string;
  publisher?: string;
  enabled?: boolean;
  showInNotificationCenter?: boolean;
  showOnLockScreen?: boolean;
  alertType: IosNotificationAlertType;
  badgesEnabled?: boolean;
  soundsEnabled?: boolean;
  //#endregion
}