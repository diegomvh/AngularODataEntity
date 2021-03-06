﻿import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region AngularOData Imports
import { 
  Model, 
  ModelField, 
  ODataModel, 
  ODataCollection, 
  HttpOptions, 
  HttpActionOptions, 
  HttpFunctionOptions, 
  HttpNavigationPropertyOptions, 
  Duration, 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { ProductsByCategory } from './products_by_category.entity';
import { ProductsByCategoryCollection } from './products_by_category.collection';
//#endregion

@Model()
export class ProductsByCategoryModel<E extends ProductsByCategory> extends ODataModel<E> {
  //#region ODataApi Properties
  @ModelField()
  CategoryName!: string;
  
  
  @ModelField()
  ProductName!: string;
  
  
  @ModelField()
  QuantityPerUnit?: string;
  
  
  @ModelField()
  UnitsInStock?: number;
  
  
  @ModelField()
  Discontinued!: boolean;
  
  
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}