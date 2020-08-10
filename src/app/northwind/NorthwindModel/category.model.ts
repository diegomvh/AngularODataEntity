import { ODataModel, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Category } from './category.entity';
import { Product } from './product.entity';
import { ProductModel } from './product.model';
import { CategoryCollection } from './category.collection';
import { ProductCollection } from './product.collection';
//#endregion

export class CategoryModel<E extends Category> extends ODataModel<E> {
  //#region ODataApi Properties
  CategoryID: number;
  CategoryName: string;
  Description?: string;
  Picture?: ArrayBuffer;
  Products?: ProductCollection<Product, ProductModel<Product>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}