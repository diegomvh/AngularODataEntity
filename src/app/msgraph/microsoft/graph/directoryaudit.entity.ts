import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { OperationResult } from './operationresult.enum';
import { AuditActivityInitiator } from './auditactivityinitiator.entity';
import { KeyValue } from './keyvalue.entity';
import { TargetResource } from './targetresource.entity';
import { AuditActivityInitiatorModel } from './auditactivityinitiator.model';
import { KeyValueModel } from './keyvalue.model';
import { TargetResourceModel } from './targetresource.model';
import { EntityModel } from './entity.model';
import { AuditActivityInitiatorCollection } from './auditactivityinitiator.collection';
import { KeyValueCollection } from './keyvalue.collection';
import { TargetResourceCollection } from './targetresource.collection';
import { EntityCollection } from './entity.collection';
//#endregion

export interface DirectoryAudit extends Entity {
  //#region ODataApi Properties
  activityDateTime: Date;
  activityDisplayName: string;
  additionalDetails?: KeyValue[];
  category: string;
  correlationId?: string;
  initiatedBy: AuditActivityInitiator;
  loggedByService?: string;
  operationType?: string;
  result?: OperationResult;
  resultReason?: string;
  targetResources?: TargetResource[];
  //#endregion
}