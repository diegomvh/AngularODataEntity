import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { TelecomExpenseManagementPartner } from './telecomexpensemanagementpartner.entity';
import { TelecomExpenseManagementPartnerModel } from './telecomexpensemanagementpartner.model';
//#endregion

export class TelecomExpenseManagementPartnerCollection<E extends TelecomExpenseManagementPartner, M extends TelecomExpenseManagementPartnerModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}