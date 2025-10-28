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
import { OrderDetailsExtended } from './order-details-extended.entity';
import { OrderDetailsExtendedModel } from './order-details-extended.model';

export class OrderDetailsExtendedCollection<E extends OrderDetailsExtended, M extends OrderDetailsExtendedModel<E>> extends ODataCollection<E, M> {
  
}
