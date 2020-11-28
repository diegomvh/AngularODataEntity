import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { WorkforceIntegrationEncryptionProtocol } from './workforceintegrationencryptionprotocol.enum';
import { WorkforceIntegrationEncryption } from './workforceintegrationencryption.complex';
import { WorkforceIntegrationEncryptionModel } from './workforceintegrationencryption.model';
//#endregion

export class WorkforceIntegrationEncryptionCollection<E extends WorkforceIntegrationEncryption, M extends WorkforceIntegrationEncryptionModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}