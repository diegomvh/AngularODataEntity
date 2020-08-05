import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { UrlAssessmentRequest } from './urlassessmentrequest.entity';
//#endregion

export const UrlAssessmentRequestConfig = {
  name: "UrlAssessmentRequest",
  base: "microsoft.graph.threatAssessmentRequest",
  annotations: [],
  fields: {
    url: {type: 'Edm.String', nullable: false}
  }
} as EntityConfig<UrlAssessmentRequest>;