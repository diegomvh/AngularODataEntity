//#region AngularOData Imports
import { 
  StructuredTypeConfig 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { Product } from './product.entity';
import { ProductModel } from './product.model';
import { ProductCollection } from './product.collection';
//#endregion

//#region ODataApi StrucutredTypeConfig
export const ProductEntityConfig = {
  name: "Product",
  model: ProductModel,
  collection: ProductCollection,
  keys: [{ref: 'ID'}],
  fields: {
    ID: {type: 'Edm.Int32', nullable: false},
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