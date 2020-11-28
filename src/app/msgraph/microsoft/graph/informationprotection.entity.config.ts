import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { InformationProtection } from './informationprotection.entity';
import { InformationProtectionModel } from './informationprotection.model';
import { InformationProtectionCollection } from './informationprotection.collection';
//#endregion

export const InformationProtectionConfig = {
  name: "informationProtection",
  base: "microsoft.graph.entity",
  model: InformationProtectionModel,
  collection: InformationProtectionCollection,
  annotations: [],
  fields: {
    threatAssessmentRequests: {type: 'graph.threatAssessmentRequest', collection: true, navigation: true}
  }
} as StructuredTypeConfig<InformationProtection>;