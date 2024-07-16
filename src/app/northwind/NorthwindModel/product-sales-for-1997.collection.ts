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
import { ProductSalesFor1997 } from './product-sales-for-1997.entity';
import { ProductSalesFor1997Model } from './product-sales-for-1997.model';
//#endregion

export class ProductSalesFor1997Collection<E extends ProductSalesFor1997, M extends ProductSalesFor1997Model<E>> extends ODataCollection<E, M> {
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
}