//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Shipper } from './shipper.entity';
import { ShipperModel } from './shipper.model';
import { ShipperCollection } from './shipper.collection';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ShipperEntityConfig = {
  name: 'Shipper',
  model: ShipperModel,
  collection: ShipperCollection,
  keys: [{name: 'ShipperID'}],
  fields: {
    ShipperID: {type: 'Edm.Int32', nullable: false},
    CompanyName: {type: 'Edm.String'},
    Phone: {type: 'Edm.String'},
    Orders: {type: 'NorthwindModel.Order', collection: true, navigation: true}
  }
} as StructuredTypeConfig;
//#endregion