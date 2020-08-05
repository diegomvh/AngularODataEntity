import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { NotificationTemplateBrandingOptions } from './notificationtemplatebrandingoptions.enum';
//#endregion

export const NotificationTemplateBrandingOptionsConfig = {
  name: "NotificationTemplateBrandingOptions",
  flags: true,
  members: NotificationTemplateBrandingOptions
} as EnumConfig<NotificationTemplateBrandingOptions>;