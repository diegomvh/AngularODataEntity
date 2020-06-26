import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Shipper } from './shipper.entity';
//#endregion

export const ShipperConfig = {
  name: "Shipper",
  annotations: [],
  fields: {
    ShipperID: {type: 'Number', key: true, ref: 'ShipperID', nullable: false},
    CompanyName: {type: 'String', nullable: false, maxLength: 40},
    Phone: {type: 'String', maxLength: 24},
    Orders: {type: 'NorthwindModel.Order', collection: true, navigation: true}
  }
} as EntityConfig<Shipper>;