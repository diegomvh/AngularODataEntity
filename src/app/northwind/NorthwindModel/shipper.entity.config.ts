import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Shipper } from './shipper.entity';
//#endregion

export const ShipperConfig = {
  name: "Shipper",
  annotations: [],
  fields: {
    ShipperID: {type: 'Edm.Int32', key: true, ref: 'ShipperID', nullable: false},
    CompanyName: {type: 'Edm.String', nullable: false, maxLength: 40},
    Phone: {type: 'Edm.String', maxLength: 24},
    Orders: {type: 'NorthwindModel.Order', collection: true, navigation: true}
  }
} as EntityConfig<Shipper>;