import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { Product } from './product.entity';
import { ProductModel } from './product.model';
import { ProductCollection } from './product.collection';
//#endregion

//#region ODataApi StrucutredTypeConfig
export const ProductConfig = {
  name: "Product",
  model: ProductModel,
  collection: ProductCollection,
  annotations: [],
  fields: {
    ID: {type: 'Edm.Int32', key: true, ref: 'ID', nullable: false},
    Name: {type: 'Edm.String'},
    Description: {type: 'Edm.String'},
    ReleaseDate: {type: 'Edm.DateTime', nullable: false},
    DiscontinuedDate: {type: 'Edm.DateTime'},
    Rating: {type: 'Edm.Int32', nullable: false},
    Price: {type: 'Edm.Decimal', nullable: false},
    Category: {type: 'ODataDemo.Category', navigation: true},
    Supplier: {type: 'ODataDemo.Supplier', navigation: true}
  }
} as StructuredTypeConfig<Product>;
//#endregion