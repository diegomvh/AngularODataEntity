import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { Alert } from './alert.entity';
import { SecureScore } from './securescore.entity';
import { SecureScoreControlProfile } from './securescorecontrolprofile.entity';
import { EntityModel } from './entity.model';
import { AlertModel } from './alert.model';
import { SecureScoreModel } from './securescore.model';
import { SecureScoreControlProfileModel } from './securescorecontrolprofile.model';
import { EntityCollection } from './entity.collection';
import { AlertCollection } from './alert.collection';
import { SecureScoreCollection } from './securescore.collection';
import { SecureScoreControlProfileCollection } from './securescorecontrolprofile.collection';
//#endregion

export interface Security extends Entity {
  //#region ODataApi Properties
  alerts?: Alert[];
  secureScoreControlProfiles?: SecureScoreControlProfile[];
  secureScores?: SecureScore[];
  //#endregion
}