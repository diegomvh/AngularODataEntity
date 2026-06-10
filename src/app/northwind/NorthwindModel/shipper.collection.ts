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
import { Shipper } from './shipper.entity';
import { ShipperModel } from './shipper.model';
import { Order } from './order.entity';
import { OrderModel } from './order.model';
import { OrderCollection } from './order.collection';

// #region Custom
// #endregion Custom
export class ShipperCollection<E extends Shipper, M extends ShipperModel<E>> extends ODataCollection<E, M> {
  
// #region Custom
// #endregion Custom
}
