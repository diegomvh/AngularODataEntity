import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { IosNotificationAlertType } from './iosnotificationalerttype.enum';
//#endregion

export const IosNotificationAlertTypeConfig = {
  name: "iosNotificationAlertType",
  members: IosNotificationAlertType
} as EnumTypeConfig<IosNotificationAlertType>;