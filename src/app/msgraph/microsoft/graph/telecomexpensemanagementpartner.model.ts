import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { TelecomExpenseManagementPartner } from './telecomexpensemanagementpartner.entity';
import { TelecomExpenseManagementPartnerCollection } from './telecomexpensemanagementpartner.collection';
//#endregion

export class TelecomExpenseManagementPartnerModel<E extends TelecomExpenseManagementPartner> extends EntityModel<E> {
  //#region ODataApi Properties
  appAuthorized: boolean;
  displayName?: string;
  enabled: boolean;
  lastConnectionDateTime: Date;
  url?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}