import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { ThreatAssessmentResultType } from './threatassessmentresulttype.enum';
//#endregion

export interface ThreatAssessmentResult extends Entity {
  //#region ODataApi Properties
  createdDateTime?: Date;
  resultType?: ThreatAssessmentResultType;
  message?: string;
  //#endregion
}