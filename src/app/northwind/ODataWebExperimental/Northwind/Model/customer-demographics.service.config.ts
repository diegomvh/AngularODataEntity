//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { CustomerDemographicsService } from './customer-demographics.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const CustomerDemographicsServiceEntitySetConfig = {
  name: 'CustomerDemographics',
  entityType: 'NorthwindModel.CustomerDemographic',
  service: CustomerDemographicsService
} as EntitySetConfig;
//#endregion