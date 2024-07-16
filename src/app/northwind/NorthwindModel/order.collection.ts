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
import { Customer } from './customer.entity';
import { Employee } from './employee.entity';
import { OrderDetail } from './order-detail.entity';
import { Order } from './order.entity';
import { Shipper } from './shipper.entity';
import { CustomerModel } from './customer.model';
import { EmployeeModel } from './employee.model';
import { OrderDetailModel } from './order-detail.model';
import { OrderModel } from './order.model';
import { ShipperModel } from './shipper.model';
import { CustomerCollection } from './customer.collection';
import { EmployeeCollection } from './employee.collection';
import { OrderDetailCollection } from './order-detail.collection';
import { ShipperCollection } from './shipper.collection';
//#endregion

export class OrderCollection<E extends Order, M extends OrderModel<E>> extends ODataCollection<E, M> {
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
}