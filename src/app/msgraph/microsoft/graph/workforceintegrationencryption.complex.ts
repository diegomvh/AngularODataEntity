import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { WorkforceIntegrationEncryptionProtocol } from './workforceintegrationencryptionprotocol.enum';
//#endregion

export interface WorkforceIntegrationEncryption {
  //#region ODataApi Properties
  protocol?: WorkforceIntegrationEncryptionProtocol;
  secret?: string;
  //#endregion
}