//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { AlphabeticalListOfProduct } from './alphabetical-list-of-product.entity';
import { AlphabeticalListOfProductModel } from './alphabetical-list-of-product.model';
import { AlphabeticalListOfProductCollection } from './alphabetical-list-of-product.collection';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const AlphabeticalListOfProductEntityConfig = {
  name: 'Alphabetical_list_of_product',
  model: AlphabeticalListOfProductModel,
  collection: AlphabeticalListOfProductCollection,
  keys: [{name: 'CategoryName'},{name: 'Discontinued'},{name: 'ProductID'},{name: 'ProductName'}],
  fields: {
    ProductID: {type: 'Edm.Int32', nullable: false},
    ProductName: {type: 'Edm.String', nullable: false},
    SupplierID: {type: 'Edm.Int32'},
    CategoryID: {type: 'Edm.Int32'},
    QuantityPerUnit: {type: 'Edm.String'},
    UnitPrice: {type: 'Edm.Decimal'},
    UnitsInStock: {type: 'Edm.Int16'},
    UnitsOnOrder: {type: 'Edm.Int16'},
    ReorderLevel: {type: 'Edm.Int16'},
    Discontinued: {type: 'Edm.Boolean', nullable: false},
    CategoryName: {type: 'Edm.String', nullable: false}
  }
} as StructuredTypeConfig;
//#endregion