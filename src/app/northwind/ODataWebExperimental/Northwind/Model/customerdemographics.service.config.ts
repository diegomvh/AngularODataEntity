import { EntitySetConfig } from 'angular-odata';

//#region ODataApi Imports
import { CustomerDemographicsService } from './customerdemographics.service';
//#endregion

//#region ODataApi EntitySetConfig
export const CustomerDemographicsServiceEntitySetConfig = {
  name: "CustomerDemographics",
  entityType: "NorthwindModel.CustomerDemographic",
  service: CustomerDemographicsService
} as EntitySetConfig;
//#endregion