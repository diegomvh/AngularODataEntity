import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { OperationResult } from './operationresult.enum';
import { AuditActivityInitiator } from './auditactivityinitiator.entity';
import { KeyValue } from './keyvalue.entity';
import { TargetResource } from './targetresource.entity';
import { DirectoryAudit } from './directoryaudit.entity';
import { AuditActivityInitiatorModel } from './auditactivityinitiator.model';
import { KeyValueModel } from './keyvalue.model';
import { TargetResourceModel } from './targetresource.model';
import { DirectoryAuditModel } from './directoryaudit.model';
import { AuditActivityInitiatorCollection } from './auditactivityinitiator.collection';
import { KeyValueCollection } from './keyvalue.collection';
import { TargetResourceCollection } from './targetresource.collection';
//#endregion

export class DirectoryAuditCollection<E extends DirectoryAudit, M extends DirectoryAuditModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}