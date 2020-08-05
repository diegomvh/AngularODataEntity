import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkforceIntegrationEncryptionProtocol } from './workforceintegrationencryptionprotocol.enum';
//#endregion

export const WorkforceIntegrationEncryptionProtocolConfig = {
  name: "WorkforceIntegrationEncryptionProtocol",
  members: WorkforceIntegrationEncryptionProtocol
} as EnumConfig<WorkforceIntegrationEncryptionProtocol>;