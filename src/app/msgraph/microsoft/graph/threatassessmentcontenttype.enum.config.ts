import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ThreatAssessmentContentType } from './threatassessmentcontenttype.enum';
//#endregion

export const ThreatAssessmentContentTypeConfig = {
  name: "threatAssessmentContentType",
  members: ThreatAssessmentContentType
} as EnumTypeConfig<ThreatAssessmentContentType>;