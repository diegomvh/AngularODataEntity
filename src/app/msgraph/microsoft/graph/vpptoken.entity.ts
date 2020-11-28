import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { VppTokenAccountType } from './vpptokenaccounttype.enum';
import { VppTokenState } from './vpptokenstate.enum';
import { VppTokenSyncStatus } from './vpptokensyncstatus.enum';
import { EntityModel } from './entity.model';
import { EntityCollection } from './entity.collection';
//#endregion

export interface VppToken extends Entity {
  //#region ODataApi Properties
  appleId?: string;
  automaticallyUpdateApps: boolean;
  countryOrRegion?: string;
  expirationDateTime: Date;
  lastModifiedDateTime: Date;
  lastSyncDateTime: Date;
  lastSyncStatus: VppTokenSyncStatus;
  organizationName?: string;
  state: VppTokenState;
  token?: string;
  vppTokenAccountType: VppTokenAccountType;
  //#endregion
}