import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ChangeType } from './changetype.enum';
import { CommsNotification } from './commsnotification.entity';
import { CommsNotificationModel } from './commsnotification.model';
//#endregion

export class CommsNotificationCollection<E extends CommsNotification, M extends CommsNotificationModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}