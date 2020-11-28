import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { WorkforceIntegrationEncryptionProtocol } from './workforceintegrationencryptionprotocol.enum';
import { WorkforceIntegrationEncryption } from './workforceintegrationencryption.complex';
import { WorkforceIntegrationEncryptionCollection } from './workforceintegrationencryption.collection';
//#endregion

export class WorkforceIntegrationEncryptionModel<E extends WorkforceIntegrationEncryption> extends ODataModel<E> {
  //#region ODataApi Properties
  protocol?: WorkforceIntegrationEncryptionProtocol;
  secret?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}