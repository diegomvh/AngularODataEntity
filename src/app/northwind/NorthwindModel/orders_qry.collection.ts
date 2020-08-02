import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { OrdersQry } from './orders_qry.entity';
import { OrdersQryModel } from './orders_qry.model';
//#endregion

export class OrdersQryCollection<E extends OrdersQry, M extends OrdersQryModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}