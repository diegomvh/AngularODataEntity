import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { NotificationTemplateBrandingOptions } from './notificationtemplatebrandingoptions.enum';
import { LocalizedNotificationMessage } from './localizednotificationmessage.entity';
//#endregion

export interface NotificationMessageTemplate extends Entity {
  //#region ODataApi Properties
  lastModifiedDateTime: Date;
  displayName: string;
  defaultLocale?: string;
  brandingOptions: NotificationTemplateBrandingOptions;
  localizedNotificationMessages?: LocalizedNotificationMessage[];
  //#endregion
}