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
import { SummaryOfSalesByQuarter } from './summary-of-sales-by-quarter.entity';
import { SummaryOfSalesByQuarterModel } from './summary-of-sales-by-quarter.model';
//#endregion

export class SummaryOfSalesByQuarterCollection<E extends SummaryOfSalesByQuarter, M extends SummaryOfSalesByQuarterModel<E>> extends ODataCollection<E, M> {
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
}