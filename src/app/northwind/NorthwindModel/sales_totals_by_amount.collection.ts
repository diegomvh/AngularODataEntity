import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { SalesTotalsByAmount } from './sales_totals_by_amount.entity';
import { SalesTotalsByAmountModel } from './sales_totals_by_amount.model';
//#endregion

export class SalesTotalsByAmountCollection<E extends SalesTotalsByAmount, M extends SalesTotalsByAmountModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}