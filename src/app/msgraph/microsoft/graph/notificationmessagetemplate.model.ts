import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { NotificationTemplateBrandingOptions } from './notificationtemplatebrandingoptions.enum';
import { NotificationMessageTemplate } from './notificationmessagetemplate.entity';
import { LocalizedNotificationMessage } from './localizednotificationmessage.entity';
import { LocalizedNotificationMessageModel } from './localizednotificationmessage.model';
import { NotificationMessageTemplateCollection } from './notificationmessagetemplate.collection';
import { LocalizedNotificationMessageCollection } from './localizednotificationmessage.collection';
//#endregion

export class NotificationMessageTemplateModel<E extends NotificationMessageTemplate> extends EntityModel<E> {
  //#region ODataApi Properties
  brandingOptions: NotificationTemplateBrandingOptions;
  defaultLocale?: string;
  displayName: string;
  lastModifiedDateTime: Date;
  localizedNotificationMessages?: LocalizedNotificationMessageCollection<LocalizedNotificationMessage, LocalizedNotificationMessageModel<LocalizedNotificationMessage>>;
  //#endregion
  //#region ODataApi Actions
  public sendTestMessage(options?: HttpOptions): Observable<any> {
    var res = this._action<null, any>('microsoft.graph.sendTestMessage');
    res.segment.entitySet('');
    return res.call(null, 'property', options) as Observable<any>;
  }
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}