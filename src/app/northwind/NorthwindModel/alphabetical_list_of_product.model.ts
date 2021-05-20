import { Model, ModelField, ODataModel, ODataCollection, HttpOptions, Duration, Expand, Select } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { AlphabeticalListOfProduct } from './alphabetical_list_of_product.entity';
import { AlphabeticalListOfProductCollection } from './alphabetical_list_of_product.collection';
//#endregion

@Model()
export class AlphabeticalListOfProductModel<E extends AlphabeticalListOfProduct> extends ODataModel<E> {
  //#region ODataApi Properties
  @ModelField()
  ProductID!: number;
  
  
  @ModelField()
  ProductName!: string;
  
  
  @ModelField()
  SupplierID?: number;
  
  
  @ModelField()
  CategoryID?: number;
  
  
  @ModelField()
  QuantityPerUnit?: string;
  
  
  @ModelField()
  UnitPrice?: number;
  
  
  @ModelField()
  UnitsInStock?: number;
  
  
  @ModelField()
  UnitsOnOrder?: number;
  
  
  @ModelField()
  ReorderLevel?: number;
  
  
  @ModelField()
  Discontinued!: boolean;
  
  
  @ModelField()
  CategoryName!: string;
  
  
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}