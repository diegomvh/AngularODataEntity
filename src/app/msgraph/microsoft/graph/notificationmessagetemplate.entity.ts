import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { NotificationTemplateBrandingOptions } from './notificationtemplatebrandingoptions.enum';
import { LocalizedNotificationMessage } from './localizednotificationmessage.entity';
import { EntityModel } from './entity.model';
import { LocalizedNotificationMessageModel } from './localizednotificationmessage.model';
import { EntityCollection } from './entity.collection';
import { LocalizedNotificationMessageCollection } from './localizednotificationmessage.collection';
//#endregion

export interface NotificationMessageTemplate extends Entity {
  //#region ODataApi Properties
  brandingOptions: NotificationTemplateBrandingOptions;
  defaultLocale?: string;
  displayName: string;
  lastModifiedDateTime: Date;
  localizedNotificationMessages?: LocalizedNotificationMessage[];
  //#endregion
}