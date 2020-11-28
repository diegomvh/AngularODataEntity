import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { LocalizedNotificationMessage } from './localizednotificationmessage.entity';
import { LocalizedNotificationMessageCollection } from './localizednotificationmessage.collection';
//#endregion

export class LocalizedNotificationMessageModel<E extends LocalizedNotificationMessage> extends EntityModel<E> {
  //#region ODataApi Properties
  isDefault: boolean;
  lastModifiedDateTime: Date;
  locale: string;
  messageTemplate: string;
  subject: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}