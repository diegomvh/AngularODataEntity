import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { ThreatAssessmentContentType } from './threatassessmentcontenttype.enum';
import { ThreatAssessmentRequestSource } from './threatassessmentrequestsource.enum';
import { ThreatAssessmentStatus } from './threatassessmentstatus.enum';
import { ThreatCategory } from './threatcategory.enum';
import { ThreatExpectedAssessment } from './threatexpectedassessment.enum';
import { IdentitySet } from './identityset.entity';
import { ThreatAssessmentResult } from './threatassessmentresult.entity';
import { IdentitySetModel } from './identityset.model';
import { EntityModel } from './entity.model';
import { ThreatAssessmentResultModel } from './threatassessmentresult.model';
import { IdentitySetCollection } from './identityset.collection';
import { EntityCollection } from './entity.collection';
import { ThreatAssessmentResultCollection } from './threatassessmentresult.collection';
//#endregion

export interface ThreatAssessmentRequest extends Entity {
  //#region ODataApi Properties
  category: ThreatCategory;
  contentType?: ThreatAssessmentContentType;
  createdBy?: IdentitySet;
  createdDateTime?: Date;
  expectedAssessment: ThreatExpectedAssessment;
  requestSource?: ThreatAssessmentRequestSource;
  status?: ThreatAssessmentStatus;
  results?: ThreatAssessmentResult[];
  //#endregion
}