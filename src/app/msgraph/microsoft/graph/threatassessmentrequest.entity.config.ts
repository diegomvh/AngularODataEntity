import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ThreatAssessmentRequest } from './threatassessmentrequest.entity';
import { ThreatAssessmentRequestModel } from './threatassessmentrequest.model';
import { ThreatAssessmentRequestCollection } from './threatassessmentrequest.collection';
//#endregion

export const ThreatAssessmentRequestConfig = {
  name: "threatAssessmentRequest",
  base: "microsoft.graph.entity",
  model: ThreatAssessmentRequestModel,
  collection: ThreatAssessmentRequestCollection,
  annotations: [],
  fields: {
    category: {type: 'graph.threatCategory', nullable: false},
    contentType: {type: 'graph.threatAssessmentContentType'},
    createdBy: {type: 'graph.identitySet'},
    createdDateTime: {type: 'Edm.DateTimeOffset'},
    expectedAssessment: {type: 'graph.threatExpectedAssessment', nullable: false},
    requestSource: {type: 'graph.threatAssessmentRequestSource'},
    status: {type: 'graph.threatAssessmentStatus'},
    results: {type: 'graph.threatAssessmentResult', collection: true, navigation: true}
  }
} as StructuredTypeConfig<ThreatAssessmentRequest>;