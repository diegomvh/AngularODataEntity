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
import { CustomerAndSuppliersByCity } from './customer_and_suppliers_by_city.entity';
import { CustomerAndSuppliersByCityModel } from './customer_and_suppliers_by_city.model';
//#endregion

export class CustomerAndSuppliersByCityCollection<E extends CustomerAndSuppliersByCity, M extends CustomerAndSuppliersByCityModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}