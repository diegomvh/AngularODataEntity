import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ChangeNotification } from './changenotification.entity';
import { ChangeNotificationCollection } from './changenotificationcollection.entity';
import { ChangeNotificationModel } from './changenotification.model';
import { ChangeNotificationCollection } from './changenotification.collection';
import { ChangeNotificationCollectionCollection } from './changenotificationcollection.collection';
//#endregion

export class ChangeNotificationCollectionModel<E extends ChangeNotificationCollection> extends ODataModel<E> {
  //#region ODataApi Properties
  value: ChangeNotificationCollection<ChangeNotification, ChangeNotificationModel<ChangeNotification>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}