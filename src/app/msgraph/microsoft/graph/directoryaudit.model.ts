import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { OperationResult } from './operationresult.enum';
import { AuditActivityInitiator } from './auditactivityinitiator.entity';
import { KeyValue } from './keyvalue.entity';
import { TargetResource } from './targetresource.entity';
import { DirectoryAudit } from './directoryaudit.entity';
import { AuditActivityInitiatorModel } from './auditactivityinitiator.model';
import { KeyValueModel } from './keyvalue.model';
import { TargetResourceModel } from './targetresource.model';
import { AuditActivityInitiatorCollection } from './auditactivityinitiator.collection';
import { KeyValueCollection } from './keyvalue.collection';
import { TargetResourceCollection } from './targetresource.collection';
import { DirectoryAuditCollection } from './directoryaudit.collection';
//#endregion

export class DirectoryAuditModel<E extends DirectoryAudit> extends EntityModel<E> {
  //#region ODataApi Properties
  activityDateTime: Date;
  activityDisplayName: string;
  additionalDetails?: KeyValueCollection<KeyValue, KeyValueModel<KeyValue>>;
  category: string;
  correlationId?: string;
  initiatedBy: AuditActivityInitiatorModel<AuditActivityInitiator>;
  loggedByService?: string;
  operationType?: string;
  result?: OperationResult;
  resultReason?: string;
  targetResources?: TargetResourceCollection<TargetResource, TargetResourceModel<TargetResource>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}