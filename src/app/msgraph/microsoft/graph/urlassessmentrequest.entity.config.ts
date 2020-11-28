import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { UrlAssessmentRequest } from './urlassessmentrequest.entity';
import { UrlAssessmentRequestModel } from './urlassessmentrequest.model';
import { UrlAssessmentRequestCollection } from './urlassessmentrequest.collection';
//#endregion

export const UrlAssessmentRequestConfig = {
  name: "urlAssessmentRequest",
  base: "microsoft.graph.threatAssessmentRequest",
  model: UrlAssessmentRequestModel,
  collection: UrlAssessmentRequestCollection,
  annotations: [],
  fields: {
    url: {type: 'Edm.String', nullable: false}
  }
} as StructuredTypeConfig<UrlAssessmentRequest>;