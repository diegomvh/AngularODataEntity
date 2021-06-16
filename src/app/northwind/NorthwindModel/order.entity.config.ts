//#region AngularOData Imports
import { 
  StructuredTypeConfig 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { Order } from './order.entity';
import { OrderModel } from './order.model';
import { OrderCollection } from './order.collection';
//#endregion

//#region ODataApi StrucutredTypeConfig
export const OrderEntityConfig = {
  name: "Order",
  model: OrderModel,
  collection: OrderCollection,
  keys: [{name: 'OrderID'}],
  fields: {
    OrderID: {type: 'Edm.Int32', nullable: false},
    CustomerID: {type: 'Edm.String', maxLength: 5},
    EmployeeID: {type: 'Edm.Int32'},
    OrderDate: {type: 'Edm.DateTimeOffset'},
    RequiredDate: {type: 'Edm.DateTimeOffset'},
    ShippedDate: {type: 'Edm.DateTimeOffset'},
    ShipVia: {type: 'Edm.Int32'},
    Freight: {type: 'Edm.Decimal', precition: 19, scale: 4},
    ShipName: {type: 'Edm.String', maxLength: 40},
    ShipAddress: {type: 'Edm.String', maxLength: 60},
    ShipCity: {type: 'Edm.String', maxLength: 15},
    ShipRegion: {type: 'Edm.String', maxLength: 15},
    ShipPostalCode: {type: 'Edm.String', maxLength: 10},
    ShipCountry: {type: 'Edm.String', maxLength: 15},
    Customer: {type: 'NorthwindModel.Customer', navigation: true, referentials: [{property: 'CustomerID', referencedProperty: 'CustomerID'}]},
    Employee: {type: 'NorthwindModel.Employee', navigation: true, referentials: [{property: 'EmployeeID', referencedProperty: 'EmployeeID'}]},
    Order_Details: {type: 'NorthwindModel.Order_Detail', collection: true, navigation: true},
    Shipper: {type: 'NorthwindModel.Shipper', navigation: true, referentials: [{property: 'ShipVia', referencedProperty: 'ShipperID'}]}
  }
} as StructuredTypeConfig<Order>;
//#endregion