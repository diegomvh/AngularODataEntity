import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  Model,
  ModelField,
  ODataModel,
  ODataCollection,
  ODataOptions,
  ODataQueryArgumentsOptions,
  ODataFunctionOptions,
  ODataActionOptions,
  Duration,
} from 'angular-odata';

import { OrderDetailsExtended } from './order-details-extended.entity';

@Model()
export class OrderDetailsExtendedModel<E extends OrderDetailsExtended> extends ODataModel<E> {
  @ModelField()
  declare OrderID: number;
  public $$OrderID() {
    return this.property<number>('OrderID');
  }
  public $OrderID() {
    return this.getAttribute<number>('OrderID') as number;
  }
  
  public OrderID$(options?: ODataQueryArgumentsOptions<number>) {
    return this.fetchAttribute<number>('OrderID', options) as Observable<number>;
  }

  @ModelField()
  declare ProductID: number;
  public $$ProductID() {
    return this.property<number>('ProductID');
  }
  public $ProductID() {
    return this.getAttribute<number>('ProductID') as number;
  }
  
  public ProductID$(options?: ODataQueryArgumentsOptions<number>) {
    return this.fetchAttribute<number>('ProductID', options) as Observable<number>;
  }

  @ModelField()
  declare ProductName: string;
  public $$ProductName() {
    return this.property<string>('ProductName');
  }
  public $ProductName() {
    return this.getAttribute<string>('ProductName') as string;
  }
  
  public ProductName$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('ProductName', options) as Observable<string>;
  }

  @ModelField()
  declare UnitPrice: number;
  public $$UnitPrice() {
    return this.property<number>('UnitPrice');
  }
  public $UnitPrice() {
    return this.getAttribute<number>('UnitPrice') as number;
  }
  
  public UnitPrice$(options?: ODataQueryArgumentsOptions<number>) {
    return this.fetchAttribute<number>('UnitPrice', options) as Observable<number>;
  }

  @ModelField()
  declare Quantity: number;
  public $$Quantity() {
    return this.property<number>('Quantity');
  }
  public $Quantity() {
    return this.getAttribute<number>('Quantity') as number;
  }
  
  public Quantity$(options?: ODataQueryArgumentsOptions<number>) {
    return this.fetchAttribute<number>('Quantity', options) as Observable<number>;
  }

  @ModelField()
  declare Discount: number;
  public $$Discount() {
    return this.property<number>('Discount');
  }
  public $Discount() {
    return this.getAttribute<number>('Discount') as number;
  }
  
  public Discount$(options?: ODataQueryArgumentsOptions<number>) {
    return this.fetchAttribute<number>('Discount', options) as Observable<number>;
  }

  @ModelField()
  declare ExtendedPrice: number;
  public $$ExtendedPrice() {
    return this.property<number>('ExtendedPrice');
  }
  public $ExtendedPrice() {
    return this.getAttribute<number>('ExtendedPrice') as number;
  }
  
  public ExtendedPrice$(options?: ODataQueryArgumentsOptions<number>) {
    return this.fetchAttribute<number>('ExtendedPrice', options) as Observable<number>;
  }

  
  
  
}