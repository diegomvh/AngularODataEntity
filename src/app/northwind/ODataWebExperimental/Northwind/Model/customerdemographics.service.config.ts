//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { CustomerDemographicsService } from './customerdemographics.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const CustomerDemographicsServiceEntitySetConfig = {
  name: 'CustomerDemographics',
  entityType: 'NorthwindModel.CustomerDemographic',
  service: CustomerDemographicsService
} as EntitySetConfig;
//#endregion