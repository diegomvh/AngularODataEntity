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
import { Employee } from './employee.entity';
import { EmployeeModel } from './employee.model';
import { Order } from './order.entity';
import { OrderModel } from './order.model';
import { OrderCollection } from './order.collection';
import { Territory } from './territory.entity';
import { TerritoryModel } from './territory.model';
import { TerritoryCollection } from './territory.collection';

export class EmployeeCollection<E extends Employee, M extends EmployeeModel<E>> extends ODataCollection<E, M> {
  
}
