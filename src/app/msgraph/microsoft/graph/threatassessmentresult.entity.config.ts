import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ThreatAssessmentResult } from './threatassessmentresult.entity';
//#endregion

export const ThreatAssessmentResultConfig = {
  name: "ThreatAssessmentResult",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    createdDateTime: {type: 'Edm.DateTimeOffset'},
    resultType: {type: 'graph.threatAssessmentResultType'},
    message: {type: 'Edm.String'}
  }
} as EntityConfig<ThreatAssessmentResult>;