import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region AngularOData Imports
import { 
  ODataModel, 
  ODataCollection, 
  HttpOptions, 
  HttpQueryOptions
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { Order } from './order.entity';
import { Shipper } from './shipper.entity';
import { OrderModel } from './order.model';
import { ShipperModel } from './shipper.model';
import { OrderCollection } from './order.collection';
//#endregion

export class ShipperCollection<E extends Shipper, M extends ShipperModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}