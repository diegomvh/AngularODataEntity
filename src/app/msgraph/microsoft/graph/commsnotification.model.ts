import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ChangeType } from './changetype.enum';
import { CommsNotification } from './commsnotification.complex';
import { CommsNotificationCollection } from './commsnotification.collection';
//#endregion

export class CommsNotificationModel<E extends CommsNotification> extends ODataModel<E> {
  //#region ODataApi Properties
  changeType: ChangeType;
  resourceUrl: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}