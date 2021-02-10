import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Product } from './product.entity';
import { Category } from './category.entity';
import { ProductModel } from './product.model';
import { ProductCollection } from './product.collection';
import { CategoryCollection } from './category.collection';
//#endregion

export class CategoryModel<E extends Category> extends ODataModel<E> {
  //#region ODataApi Properties
  ID!: number;
  Name?: string;
  Products?: ProductCollection<Product, ProductModel<Product>>;
  //#endregion
  //#region ODataApi Setters
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}