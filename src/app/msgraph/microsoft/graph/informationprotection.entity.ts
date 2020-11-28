import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { ThreatAssessmentRequest } from './threatassessmentrequest.entity';
import { EntityModel } from './entity.model';
import { ThreatAssessmentRequestModel } from './threatassessmentrequest.model';
import { EntityCollection } from './entity.collection';
import { ThreatAssessmentRequestCollection } from './threatassessmentrequest.collection';
//#endregion

export interface InformationProtection extends Entity {
  //#region ODataApi Properties
  threatAssessmentRequests?: ThreatAssessmentRequest[];
  //#endregion
}