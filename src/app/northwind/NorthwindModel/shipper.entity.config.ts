//#region AngularOData Imports
import { 
  StructuredTypeConfig 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { Shipper } from './shipper.entity';
import { ShipperModel } from './shipper.model';
import { ShipperCollection } from './shipper.collection';
//#endregion

//#region ODataApi StrucutredTypeConfig
export const ShipperEntityConfig = {
  name: "Shipper",
  model: ShipperModel,
  collection: ShipperCollection,
  keys: [{name: 'ShipperID'}],
  fields: {
    ShipperID: {type: 'Edm.Int32', nullable: false},
    CompanyName: {type: 'Edm.String', nullable: false, maxLength: 40},
    Phone: {type: 'Edm.String', maxLength: 24},
    Orders: {type: 'NorthwindModel.Order', collection: true, navigation: true}
  }
} as StructuredTypeConfig<Shipper>;
//#endregion