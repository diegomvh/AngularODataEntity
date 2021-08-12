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
import { ProductsByCategory } from './products_by_category.entity';
import { ProductsByCategoryModel } from './products_by_category.model';
//#endregion

export class ProductsByCategoryCollection<E extends ProductsByCategory, M extends ProductsByCategoryModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}