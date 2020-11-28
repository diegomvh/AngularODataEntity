import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ThreatAssessmentResult } from './threatassessmentresult.entity';
import { ThreatAssessmentResultModel } from './threatassessmentresult.model';
import { ThreatAssessmentResultCollection } from './threatassessmentresult.collection';
//#endregion

export const ThreatAssessmentResultConfig = {
  name: "threatAssessmentResult",
  base: "microsoft.graph.entity",
  model: ThreatAssessmentResultModel,
  collection: ThreatAssessmentResultCollection,
  annotations: [],
  fields: {
    createdDateTime: {type: 'Edm.DateTimeOffset'},
    message: {type: 'Edm.String'},
    resultType: {type: 'graph.threatAssessmentResultType'}
  }
} as StructuredTypeConfig<ThreatAssessmentResult>;