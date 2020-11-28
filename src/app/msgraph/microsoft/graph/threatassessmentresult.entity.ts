import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { ThreatAssessmentResultType } from './threatassessmentresulttype.enum';
import { EntityModel } from './entity.model';
import { EntityCollection } from './entity.collection';
//#endregion

export interface ThreatAssessmentResult extends Entity {
  //#region ODataApi Properties
  createdDateTime?: Date;
  message?: string;
  resultType?: ThreatAssessmentResultType;
  //#endregion
}