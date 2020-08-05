import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { VppTokenAccountType } from './vpptokenaccounttype.enum';
import { VppTokenState } from './vpptokenstate.enum';
import { VppTokenSyncStatus } from './vpptokensyncstatus.enum';
//#endregion

export interface VppToken extends Entity {
  //#region ODataApi Properties
  organizationName?: string;
  vppTokenAccountType: VppTokenAccountType;
  appleId?: string;
  expirationDateTime: Date;
  lastSyncDateTime: Date;
  token?: string;
  lastModifiedDateTime: Date;
  state: VppTokenState;
  lastSyncStatus: VppTokenSyncStatus;
  automaticallyUpdateApps: boolean;
  countryOrRegion?: string;
  //#endregion
}