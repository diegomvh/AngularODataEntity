import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  ODataModel,
  ODataCollection,
  ODataOptions,
  ODataQueryArgumentsOptions,
  ODataFunctionOptions,
  ODataActionOptions
} from 'angular-odata';
import { SummaryOfSalesByYear } from './summary-of-sales-by-year.entity';
import { SummaryOfSalesByYearModel } from './summary-of-sales-by-year.model';

// #region Custom
// #endregion Custom
export class SummaryOfSalesByYearCollection<E extends SummaryOfSalesByYear, M extends SummaryOfSalesByYearModel<E>> extends ODataCollection<E, M> {
  
// #region Custom
// #endregion Custom
}
