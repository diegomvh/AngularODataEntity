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
import { SummaryOfSalesByYear } from './summary-of-sales-by-year.entity';
import { SummaryOfSalesByYearModel } from './summary-of-sales-by-year.model';
//#endregion

export class SummaryOfSalesByYearCollection<E extends SummaryOfSalesByYear, M extends SummaryOfSalesByYearModel<E>> extends ODataCollection<E, M> {
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
}