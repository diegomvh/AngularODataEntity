import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ChangeTrackedEntityCollection } from './changetrackedentity.collection';
import { WorkforceIntegrationSupportedEntities } from './workforceintegrationsupportedentities.enum';
import { WorkforceIntegrationEncryption } from './workforceintegrationencryption.entity';
import { WorkforceIntegration } from './workforceintegration.entity';
import { WorkforceIntegrationEncryptionModel } from './workforceintegrationencryption.model';
import { WorkforceIntegrationModel } from './workforceintegration.model';
import { WorkforceIntegrationEncryptionCollection } from './workforceintegrationencryption.collection';
//#endregion

export class WorkforceIntegrationCollection<E extends WorkforceIntegration, M extends WorkforceIntegrationModel<E>> extends ChangeTrackedEntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}