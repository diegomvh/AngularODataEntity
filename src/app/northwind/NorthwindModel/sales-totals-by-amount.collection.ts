import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApiGen ODataImports
import {
  ODataModel,
  ODataCollection,
  ODataOptions,
  ODataQueryArgumentsOptions,
  ODataFunctionOptions,
  ODataActionOptions
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { SalesTotalsByAmount } from './sales-totals-by-amount.entity';
import { SalesTotalsByAmountModel } from './sales-totals-by-amount.model';
//#endregion

export class SalesTotalsByAmountCollection<E extends SalesTotalsByAmount, M extends SalesTotalsByAmountModel<E>> extends ODataCollection<E, M> {
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
}