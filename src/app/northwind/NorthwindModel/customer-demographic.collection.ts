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
import { CustomerDemographic } from './customer-demographic.entity';
import { CustomerDemographicModel } from './customer-demographic.model';
import { Customer } from './customer.entity';
import { CustomerModel } from './customer.model';
import { CustomerCollection } from './customer.collection';

export class CustomerDemographicCollection<E extends CustomerDemographic, M extends CustomerDemographicModel<E>> extends ODataCollection<E, M> {
  
}
