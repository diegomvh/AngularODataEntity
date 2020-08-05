import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { InformationProtection } from './informationprotection.entity';
//#endregion

export const InformationProtectionConfig = {
  name: "informationProtection",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    threatAssessmentRequests: {type: 'graph.threatAssessmentRequest', collection: true, navigation: true}
  }
} as EntityConfig<InformationProtection>;