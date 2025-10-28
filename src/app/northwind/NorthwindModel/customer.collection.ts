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
import { Customer } from './customer.entity';
import { CustomerModel } from './customer.model';
import { Order } from './order.entity';
import { OrderModel } from './order.model';
import { OrderCollection } from './order.collection';
import { CustomerDemographic } from './customer-demographic.entity';
import { CustomerDemographicModel } from './customer-demographic.model';
import { CustomerDemographicCollection } from './customer-demographic.collection';

export class CustomerCollection<E extends Customer, M extends CustomerModel<E>> extends ODataCollection<E, M> {
  
}
