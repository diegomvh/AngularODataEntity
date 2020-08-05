import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { OperationResult } from './operationresult.enum';
import { AuditActivityInitiator } from './auditactivityinitiator.entity';
import { TargetResource } from './targetresource.entity';
import { KeyValue } from './keyvalue.entity';
//#endregion

export interface DirectoryAudit extends Entity {
  //#region ODataApi Properties
  category: string;
  correlationId?: string;
  result?: OperationResult;
  resultReason?: string;
  activityDisplayName: string;
  activityDateTime: Date;
  loggedByService?: string;
  operationType?: string;
  initiatedBy: AuditActivityInitiator;
  targetResources?: TargetResource[];
  additionalDetails?: KeyValue[];
  //#endregion
}