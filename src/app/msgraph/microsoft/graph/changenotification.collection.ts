import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ChangeType } from './changetype.enum';
import { ChangeNotification } from './changenotification.entity';
import { ResourceData } from './resourcedata.entity';
import { ChangeNotificationModel } from './changenotification.model';
import { ResourceDataModel } from './resourcedata.model';
import { ResourceDataCollection } from './resourcedata.collection';
//#endregion

export class ChangeNotificationCollection<E extends ChangeNotification, M extends ChangeNotificationModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}