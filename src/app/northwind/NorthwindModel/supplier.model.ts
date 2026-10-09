import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  Model,
  ModelField,
  ODataModel,
  ODataCollection,
  ODataOptions,
  ODataQueryableOptions,
  ODataFunctionOptions,
  ODataActionOptions,
} from 'angular-odata';

import { Supplier } from './supplier.entity';
import { Product } from './product.entity';
import { ProductModel } from './product.model';
import { ProductCollection } from './product.collection';

// #region Custom
// #endregion Custom
@Model()
export class SupplierModel<E extends Supplier> extends ODataModel<E> {
  @ModelField()
  declare SupplierID: number;
  public $$SupplierID() {
    return this.property<number>('SupplierID');
  }
  public $SupplierID() {
    return this.getAttribute<number>('SupplierID') as number;
  }
  public SupplierID$(options?: ODataQueryableOptions<number>) {
    return this.fetchAttribute<number>('SupplierID', options) as Observable<number>;
  }

  @ModelField()
  declare CompanyName: string;
  public $$CompanyName() {
    return this.property<string>('CompanyName');
  }
  public $CompanyName() {
    return this.getAttribute<string>('CompanyName') as string;
  }
  public CompanyName$(options?: ODataQueryableOptions<string>) {
    return this.fetchAttribute<string>('CompanyName', options) as Observable<string>;
  }

  @ModelField()
  declare ContactName: string;
  public $$ContactName() {
    return this.property<string>('ContactName');
  }
  public $ContactName() {
    return this.getAttribute<string>('ContactName') as string;
  }
  public ContactName$(options?: ODataQueryableOptions<string>) {
    return this.fetchAttribute<string>('ContactName', options) as Observable<string>;
  }

  @ModelField()
  declare ContactTitle: string;
  public $$ContactTitle() {
    return this.property<string>('ContactTitle');
  }
  public $ContactTitle() {
    return this.getAttribute<string>('ContactTitle') as string;
  }
  public ContactTitle$(options?: ODataQueryableOptions<string>) {
    return this.fetchAttribute<string>('ContactTitle', options) as Observable<string>;
  }

  @ModelField()
  declare Address: string;
  public $$Address() {
    return this.property<string>('Address');
  }
  public $Address() {
    return this.getAttribute<string>('Address') as string;
  }
  public Address$(options?: ODataQueryableOptions<string>) {
    return this.fetchAttribute<string>('Address', options) as Observable<string>;
  }

  @ModelField()
  declare City: string;
  public $$City() {
    return this.property<string>('City');
  }
  public $City() {
    return this.getAttribute<string>('City') as string;
  }
  public City$(options?: ODataQueryableOptions<string>) {
    return this.fetchAttribute<string>('City', options) as Observable<string>;
  }

  @ModelField()
  declare Region: string;
  public $$Region() {
    return this.property<string>('Region');
  }
  public $Region() {
    return this.getAttribute<string>('Region') as string;
  }
  public Region$(options?: ODataQueryableOptions<string>) {
    return this.fetchAttribute<string>('Region', options) as Observable<string>;
  }

  @ModelField()
  declare PostalCode: string;
  public $$PostalCode() {
    return this.property<string>('PostalCode');
  }
  public $PostalCode() {
    return this.getAttribute<string>('PostalCode') as string;
  }
  public PostalCode$(options?: ODataQueryableOptions<string>) {
    return this.fetchAttribute<string>('PostalCode', options) as Observable<string>;
  }

  @ModelField()
  declare Country: string;
  public $$Country() {
    return this.property<string>('Country');
  }
  public $Country() {
    return this.getAttribute<string>('Country') as string;
  }
  public Country$(options?: ODataQueryableOptions<string>) {
    return this.fetchAttribute<string>('Country', options) as Observable<string>;
  }

  @ModelField()
  declare Phone: string;
  public $$Phone() {
    return this.property<string>('Phone');
  }
  public $Phone() {
    return this.getAttribute<string>('Phone') as string;
  }
  public Phone$(options?: ODataQueryableOptions<string>) {
    return this.fetchAttribute<string>('Phone', options) as Observable<string>;
  }

  @ModelField()
  declare Fax: string;
  public $$Fax() {
    return this.property<string>('Fax');
  }
  public $Fax() {
    return this.getAttribute<string>('Fax') as string;
  }
  public Fax$(options?: ODataQueryableOptions<string>) {
    return this.fetchAttribute<string>('Fax', options) as Observable<string>;
  }

  @ModelField()
  declare HomePage: string;
  public $$HomePage() {
    return this.property<string>('HomePage');
  }
  public $HomePage() {
    return this.getAttribute<string>('HomePage') as string;
  }
  public HomePage$(options?: ODataQueryableOptions<string>) {
    return this.fetchAttribute<string>('HomePage', options) as Observable<string>;
  }

  @ModelField()
  declare Products?: ProductCollection<Product, ProductModel<Product>>;
  public $$Products() {
    return this.navigationProperty<Product>('Products');
  }
  public $Products() {
    return this.getAttribute<Product>('Products') as ProductCollection<
      Product,
      ProductModel<Product>
    >;
  }
  public Products$$(
    model: ProductCollection<Product, ProductModel<Product>> | null,
    options?: ODataOptions,
  ) {
    return this.setReference<Product>('Products', model, options);
  }
  public Products$(options?: ODataQueryableOptions<Product>) {
    return this.fetchAttribute<Product>('Products', options) as Observable<
      ProductCollection<Product, ProductModel<Product>>
    >;
  }

  // #region Custom
  // #endregion Custom
}
// #region Custom
// #endregion Custom
