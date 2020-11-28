import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { LocalizedNotificationMessage } from './localizednotificationmessage.entity';
import { LocalizedNotificationMessageModel } from './localizednotificationmessage.model';
//#endregion

export class LocalizedNotificationMessageCollection<E extends LocalizedNotificationMessage, M extends LocalizedNotificationMessageModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}