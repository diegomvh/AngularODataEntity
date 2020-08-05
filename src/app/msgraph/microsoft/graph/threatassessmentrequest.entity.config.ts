import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ThreatAssessmentRequest } from './threatassessmentrequest.entity';
//#endregion

export const ThreatAssessmentRequestConfig = {
  name: "threatAssessmentRequest",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    createdDateTime: {type: 'Edm.DateTimeOffset'},
    contentType: {type: 'graph.threatAssessmentContentType'},
    expectedAssessment: {type: 'graph.threatExpectedAssessment', nullable: false},
    category: {type: 'graph.threatCategory', nullable: false},
    status: {type: 'graph.threatAssessmentStatus'},
    requestSource: {type: 'graph.threatAssessmentRequestSource'},
    createdBy: {type: 'graph.identitySet'},
    results: {type: 'graph.threatAssessmentResult', collection: true, navigation: true}
  }
} as EntityConfig<ThreatAssessmentRequest>;