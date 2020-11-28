import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { 
  ODataClient,
  ODataSingletonService, 
  ODataEntity, 
  ODataEntities, 
  ODataProperty, 
  EntityKey,
  Duration,
  ODataEntityResource,
  ODataEntitySetResource,
  ODataNavigationPropertyResource,
  ODataActionResource,
  ODataFunctionResource,
  HttpOptions
} from 'angular-odata';

//#region ODataApi Imports
import { AuditLogRoot } from './auditlogroot.entity';
import { DirectoryAudit } from './directoryaudit.entity';
import { SignIn } from './signin.entity';
import { RestrictedSignIn } from './restrictedsignin.entity';
import { AuditLogRootModel } from './auditlogroot.model';
import { DirectoryAuditModel } from './directoryaudit.model';
import { SignInModel } from './signin.model';
import { RestrictedSignInModel } from './restrictedsignin.model';
import { AuditLogRootCollection } from './auditlogroot.collection';
import { DirectoryAuditCollection } from './directoryaudit.collection';
import { SignInCollection } from './signin.collection';
import { RestrictedSignInCollection } from './restrictedsignin.collection';
//#endregion

@Injectable()
export class AuditLogsService extends ODataSingletonService<AuditLogRoot> {
  constructor(protected client: ODataClient) {
    super(client, 'auditLogs', 'microsoft.graph.auditLogRoot');
  }
  
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}