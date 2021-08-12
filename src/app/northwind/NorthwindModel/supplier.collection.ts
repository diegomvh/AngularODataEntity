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
import { Product } from './product.entity';
import { Supplier } from './supplier.entity';
import { ProductModel } from './product.model';
import { SupplierModel } from './supplier.model';
import { ProductCollection } from './product.collection';
//#endregion

export class SupplierCollection<E extends Supplier, M extends SupplierModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}