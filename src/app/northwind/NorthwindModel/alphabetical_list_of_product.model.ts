import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region AngularOData Imports
import { 
  Model, 
  ModelField, 
  ODataModel, 
  ODataCollection, 
  HttpOptions, 
  HttpQueryOptions, 
  Duration, 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { AlphabeticalListOfProduct } from './alphabetical_list_of_product.entity';
import { AlphabeticalListOfProductCollection } from './alphabetical_list_of_product.collection';
//#endregion

@Model()
export class AlphabeticalListOfProductModel<E extends AlphabeticalListOfProduct> extends ODataModel<E> {
  //#region ODataApi Properties
  @ModelField()
  ProductID!: number;
  public $ProductID() {
    return this.property<number>('ProductID');
  }
  public getProductID(options?: HttpOptions) {
    return this.getValue<number>('ProductID', options) as Observable<number>;
  }
  
  @ModelField()
  ProductName!: string;
  public $ProductName() {
    return this.property<string>('ProductName');
  }
  public getProductName(options?: HttpOptions) {
    return this.getValue<string>('ProductName', options) as Observable<string>;
  }
  
  @ModelField()
  SupplierID?: number;
  public $SupplierID() {
    return this.property<number>('SupplierID');
  }
  public getSupplierID(options?: HttpOptions) {
    return this.getValue<number>('SupplierID', options) as Observable<number>;
  }
  
  @ModelField()
  CategoryID?: number;
  public $CategoryID() {
    return this.property<number>('CategoryID');
  }
  public getCategoryID(options?: HttpOptions) {
    return this.getValue<number>('CategoryID', options) as Observable<number>;
  }
  
  @ModelField()
  QuantityPerUnit?: string;
  public $QuantityPerUnit() {
    return this.property<string>('QuantityPerUnit');
  }
  public getQuantityPerUnit(options?: HttpOptions) {
    return this.getValue<string>('QuantityPerUnit', options) as Observable<string>;
  }
  
  @ModelField()
  UnitPrice?: number;
  public $UnitPrice() {
    return this.property<number>('UnitPrice');
  }
  public getUnitPrice(options?: HttpOptions) {
    return this.getValue<number>('UnitPrice', options) as Observable<number>;
  }
  
  @ModelField()
  UnitsInStock?: number;
  public $UnitsInStock() {
    return this.property<number>('UnitsInStock');
  }
  public getUnitsInStock(options?: HttpOptions) {
    return this.getValue<number>('UnitsInStock', options) as Observable<number>;
  }
  
  @ModelField()
  UnitsOnOrder?: number;
  public $UnitsOnOrder() {
    return this.property<number>('UnitsOnOrder');
  }
  public getUnitsOnOrder(options?: HttpOptions) {
    return this.getValue<number>('UnitsOnOrder', options) as Observable<number>;
  }
  
  @ModelField()
  ReorderLevel?: number;
  public $ReorderLevel() {
    return this.property<number>('ReorderLevel');
  }
  public getReorderLevel(options?: HttpOptions) {
    return this.getValue<number>('ReorderLevel', options) as Observable<number>;
  }
  
  @ModelField()
  Discontinued!: boolean;
  public $Discontinued() {
    return this.property<boolean>('Discontinued');
  }
  public getDiscontinued(options?: HttpOptions) {
    return this.getValue<boolean>('Discontinued', options) as Observable<boolean>;
  }
  
  @ModelField()
  CategoryName!: string;
  public $CategoryName() {
    return this.property<string>('CategoryName');
  }
  public getCategoryName(options?: HttpOptions) {
    return this.getValue<string>('CategoryName', options) as Observable<string>;
  }
  
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}