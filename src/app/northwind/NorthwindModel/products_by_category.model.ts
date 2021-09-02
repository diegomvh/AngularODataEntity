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
import { ProductsByCategory } from './products_by_category.entity';
import { ProductsByCategoryCollection } from './products_by_category.collection';
//#endregion

@Model()
export class ProductsByCategoryModel<E extends ProductsByCategory> extends ODataModel<E> {
  //#region ODataApi Properties
  @ModelField()
  CategoryName!: string;
  public $CategoryName() {
    return this.property<string>('CategoryName');
  }
  public getCategoryName(options?: HttpOptions) {
    return this.getValue<string>('CategoryName', options) as Observable<string>;
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
  QuantityPerUnit?: string;
  public $QuantityPerUnit() {
    return this.property<string>('QuantityPerUnit');
  }
  public getQuantityPerUnit(options?: HttpOptions) {
    return this.getValue<string>('QuantityPerUnit', options) as Observable<string>;
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
  Discontinued!: boolean;
  public $Discontinued() {
    return this.property<boolean>('Discontinued');
  }
  public getDiscontinued(options?: HttpOptions) {
    return this.getValue<boolean>('Discontinued', options) as Observable<boolean>;
  }
  
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}