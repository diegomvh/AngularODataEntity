import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { Alert } from './alert.entity';
import { SecureScoreControlProfile } from './securescorecontrolprofile.entity';
import { SecureScore } from './securescore.entity';
//#endregion

export interface Security extends Entity {
  //#region ODataApi Properties
  alerts?: Alert[];
  secureScoreControlProfiles?: SecureScoreControlProfile[];
  secureScores?: SecureScore[];
  //#endregion
}