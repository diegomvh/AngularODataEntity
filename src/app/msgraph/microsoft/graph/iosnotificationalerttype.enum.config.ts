import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { IosNotificationAlertType } from './iosnotificationalerttype.enum';
//#endregion

export const IosNotificationAlertTypeConfig = {
  name: "iosNotificationAlertType",
  members: IosNotificationAlertType
} as EnumConfig<IosNotificationAlertType>;