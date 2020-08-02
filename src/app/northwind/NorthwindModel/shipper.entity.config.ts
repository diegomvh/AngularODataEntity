import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Shipper } from './shipper.entity';
import { ShipperModel } from './shipper.model';
import { ShipperCollection } from './shipper.collection';
//#endregion

export const ShipperConfig = {
  name: "Shipper",
  model: ShipperModel,
  collection: ShipperCollection,
  annotations: [],
  fields: {
    shipperID: {name: 'ShipperID', type: 'Edm.Int32', key: true, ref: 'shipperID', nullable: false},
    companyName: {name: 'CompanyName', type: 'Edm.String', nullable: false, maxLength: 40},
    phone: {name: 'Phone', type: 'Edm.String', maxLength: 24},
    orders: {name: 'Orders', type: 'NorthwindModel.Order', collection: true, navigation: true}
  }
} as EntityConfig<Shipper>;