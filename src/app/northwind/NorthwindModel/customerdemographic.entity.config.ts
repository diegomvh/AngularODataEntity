//#region AngularOData Imports
import { 
  StructuredTypeConfig 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { CustomerDemographic } from './customerdemographic.entity';
import { CustomerDemographicModel } from './customerdemographic.model';
import { CustomerDemographicCollection } from './customerdemographic.collection';
//#endregion

//#region ODataApi StrucutredTypeConfig
export const CustomerDemographicEntityConfig = {
  name: "CustomerDemographic",
  model: CustomerDemographicModel,
  collection: CustomerDemographicCollection,
  keys: [{name: 'CustomerTypeID'}],
  fields: {
    CustomerTypeID: {type: 'Edm.String', nullable: false, maxLength: 10},
    CustomerDesc: {type: 'Edm.String'},
    Customers: {type: 'NorthwindModel.Customer', collection: true, navigation: true}
  }
} as StructuredTypeConfig<CustomerDemographic>;
//#endregion