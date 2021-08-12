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
import { ProductSalesFor1997 } from './product_sales_for_1997.entity';
import { ProductSalesFor1997Model } from './product_sales_for_1997.model';
//#endregion

export class ProductSalesFor1997Collection<E extends ProductSalesFor1997, M extends ProductSalesFor1997Model<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}