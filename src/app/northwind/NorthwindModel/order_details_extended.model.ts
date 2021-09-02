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
import { OrderDetailsExtended } from './order_details_extended.entity';
import { OrderDetailsExtendedCollection } from './order_details_extended.collection';
//#endregion

@Model()
export class OrderDetailsExtendedModel<E extends OrderDetailsExtended> extends ODataModel<E> {
  //#region ODataApi Properties
  @ModelField()
  OrderID!: number;
  public $OrderID() {
    return this.property<number>('OrderID');
  }
  public getOrderID(options?: HttpOptions) {
    return this.getValue<number>('OrderID', options) as Observable<number>;
  }
  
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
  UnitPrice!: number;
  public $UnitPrice() {
    return this.property<number>('UnitPrice');
  }
  public getUnitPrice(options?: HttpOptions) {
    return this.getValue<number>('UnitPrice', options) as Observable<number>;
  }
  
  @ModelField()
  Quantity!: number;
  public $Quantity() {
    return this.property<number>('Quantity');
  }
  public getQuantity(options?: HttpOptions) {
    return this.getValue<number>('Quantity', options) as Observable<number>;
  }
  
  @ModelField()
  Discount!: number;
  public $Discount() {
    return this.property<number>('Discount');
  }
  public getDiscount(options?: HttpOptions) {
    return this.getValue<number>('Discount', options) as Observable<number>;
  }
  
  @ModelField()
  ExtendedPrice?: number;
  public $ExtendedPrice() {
    return this.property<number>('ExtendedPrice');
  }
  public getExtendedPrice(options?: HttpOptions) {
    return this.getValue<number>('ExtendedPrice', options) as Observable<number>;
  }
  
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}