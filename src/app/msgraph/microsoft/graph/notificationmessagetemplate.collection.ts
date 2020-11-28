import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { NotificationTemplateBrandingOptions } from './notificationtemplatebrandingoptions.enum';
import { NotificationMessageTemplate } from './notificationmessagetemplate.entity';
import { LocalizedNotificationMessage } from './localizednotificationmessage.entity';
import { NotificationMessageTemplateModel } from './notificationmessagetemplate.model';
import { LocalizedNotificationMessageModel } from './localizednotificationmessage.model';
import { LocalizedNotificationMessageCollection } from './localizednotificationmessage.collection';
//#endregion

export class NotificationMessageTemplateCollection<E extends NotificationMessageTemplate, M extends NotificationMessageTemplateModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}