//#region AngularOData Imports
import { 
  StructuredTypeConfig 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { AlphabeticalListOfProduct } from './alphabetical_list_of_product.entity';
import { AlphabeticalListOfProductModel } from './alphabetical_list_of_product.model';
import { AlphabeticalListOfProductCollection } from './alphabetical_list_of_product.collection';
//#endregion

//#region ODataApi StrucutredTypeConfig
export const AlphabeticalListOfProductEntityConfig = {
  name: "Alphabetical_list_of_product",
  model: AlphabeticalListOfProductModel,
  collection: AlphabeticalListOfProductCollection,
  keys: [{ref: 'CategoryName'},{ref: 'Discontinued'},{ref: 'ProductID'},{ref: 'ProductName'}],
  fields: {
    ProductID: {type: 'Edm.Int32', nullable: false},
    ProductName: {type: 'Edm.String', nullable: false, maxLength: 40},
    SupplierID: {type: 'Edm.Int32'},
    CategoryID: {type: 'Edm.Int32'},
    QuantityPerUnit: {type: 'Edm.String', maxLength: 20},
    UnitPrice: {type: 'Edm.Decimal', precition: 19, scale: 4},
    UnitsInStock: {type: 'Edm.Int16'},
    UnitsOnOrder: {type: 'Edm.Int16'},
    ReorderLevel: {type: 'Edm.Int16'},
    Discontinued: {type: 'Edm.Boolean', nullable: false},
    CategoryName: {type: 'Edm.String', nullable: false, maxLength: 15}
  }
} as StructuredTypeConfig<AlphabeticalListOfProduct>;
//#endregion