import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ChangeType } from './changetype.enum';
import { ChangeNotification } from './changenotification.entity';
import { ResourceData } from './resourcedata.entity';
import { ResourceDataModel } from './resourcedata.model';
import { ChangeNotificationCollection } from './changenotification.collection';
import { ResourceDataCollection } from './resourcedata.collection';
//#endregion

export class ChangeNotificationModel<E extends ChangeNotification> extends ODataModel<E> {
  //#region ODataApi Properties
  changeType: ChangeType;
  clientState?: string;
  id?: string;
  resource: string;
  resourceData?: ResourceDataModel<ResourceData>;
  subscriptionExpirationDateTime: Date;
  subscriptionId: string;
  tenantId: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}