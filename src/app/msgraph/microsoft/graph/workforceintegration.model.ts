import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ChangeTrackedEntityModel } from './changetrackedentity.model';
import { WorkforceIntegrationSupportedEntities } from './workforceintegrationsupportedentities.enum';
import { WorkforceIntegrationEncryption } from './workforceintegrationencryption.complex';
import { WorkforceIntegration } from './workforceintegration.entity';
import { WorkforceIntegrationEncryptionModel } from './workforceintegrationencryption.model';
import { WorkforceIntegrationEncryptionCollection } from './workforceintegrationencryption.collection';
import { WorkforceIntegrationCollection } from './workforceintegration.collection';
//#endregion

export class WorkforceIntegrationModel<E extends WorkforceIntegration> extends ChangeTrackedEntityModel<E> {
  //#region ODataApi Properties
  apiVersion?: number;
  displayName?: string;
  encryption?: WorkforceIntegrationEncryptionModel<WorkforceIntegrationEncryption>;
  isActive?: boolean;
  supportedEntities?: WorkforceIntegrationSupportedEntities;
  url?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}