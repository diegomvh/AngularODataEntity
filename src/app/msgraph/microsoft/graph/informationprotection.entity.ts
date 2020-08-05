import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { ThreatAssessmentRequest } from './threatassessmentrequest.entity';
//#endregion

export interface InformationProtection extends Entity {
  //#region ODataApi Properties
  threatAssessmentRequests?: ThreatAssessmentRequest[];
  //#endregion
}