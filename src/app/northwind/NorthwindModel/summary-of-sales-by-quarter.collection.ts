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
import { SummaryOfSalesByQuarter } from './summary-of-sales-by-quarter.entity';
import { SummaryOfSalesByQuarterModel } from './summary-of-sales-by-quarter.model';

// #region Custom
// #endregion Custom
export class SummaryOfSalesByQuarterCollection<E extends SummaryOfSalesByQuarter, M extends SummaryOfSalesByQuarterModel<E>> extends ODataCollection<E, M> {
  
// #region Custom
// #endregion Custom
}
