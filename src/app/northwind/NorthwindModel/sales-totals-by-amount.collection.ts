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
import { SalesTotalsByAmount } from './sales-totals-by-amount.entity';
import { SalesTotalsByAmountModel } from './sales-totals-by-amount.model';

export class SalesTotalsByAmountCollection<E extends SalesTotalsByAmount, M extends SalesTotalsByAmountModel<E>> extends ODataCollection<E, M> {
  
}
