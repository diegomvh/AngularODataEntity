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
import { Invoice } from './invoice.entity';
import { InvoiceModel } from './invoice.model';

export class InvoiceCollection<E extends Invoice, M extends InvoiceModel<E>> extends ODataCollection<E, M> {
  
}
