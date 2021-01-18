import { EntitySetConfig } from 'angular-odata';

//#region ODataApi Imports
import { CustomerDemographicsService } from './customerdemographics.service';
//#endregion

//#region ODataApi EntitySetConfig
export const CustomerDemographicsServiceEntitySetConfig = {
  name: "CustomerDemographics",
  entityType: "NorthwindModel.CustomerDemographic",
  service: CustomerDemographicsService,
  annotations: []
} as EntitySetConfig;
//#endregion