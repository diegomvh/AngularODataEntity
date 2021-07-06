import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region AngularOData Imports
import { 
  ODataModel, 
  ODataCollection, 
  HttpOptions, 
  HttpActionOptions, 
  HttpFunctionOptions, 
  HttpNavigationPropertyOptions
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { Address } from './address.complex';
import { Supplier } from './supplier.entity';
import { AddressModel } from './address.model';
import { SupplierModel } from './supplier.model';
import { AddressCollection } from './address.collection';
//#endregion

export class SupplierCollection<E extends Supplier, M extends SupplierModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}