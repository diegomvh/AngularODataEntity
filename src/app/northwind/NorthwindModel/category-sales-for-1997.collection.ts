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
import { CategorySalesFor1997 } from './category-sales-for-1997.entity';
import { CategorySalesFor1997Model } from './category-sales-for-1997.model';
//#endregion

export class CategorySalesFor1997Collection<E extends CategorySalesFor1997, M extends CategorySalesFor1997Model<E>> extends ODataCollection<E, M> {
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
}