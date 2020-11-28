import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { AverageComparativeScore } from './averagecomparativescore.entity';
import { ControlScore } from './controlscore.entity';
import { SecurityVendorInformation } from './securityvendorinformation.entity';
import { AverageComparativeScoreModel } from './averagecomparativescore.model';
import { ControlScoreModel } from './controlscore.model';
import { SecurityVendorInformationModel } from './securityvendorinformation.model';
import { EntityModel } from './entity.model';
import { AverageComparativeScoreCollection } from './averagecomparativescore.collection';
import { ControlScoreCollection } from './controlscore.collection';
import { SecurityVendorInformationCollection } from './securityvendorinformation.collection';
import { EntityCollection } from './entity.collection';
//#endregion

export interface SecureScore extends Entity {
  //#region ODataApi Properties
  activeUserCount?: number;
  averageComparativeScores?: AverageComparativeScore[];
  azureTenantId: string;
  controlScores?: ControlScore[];
  createdDateTime?: Date;
  currentScore?: number;
  enabledServices?: string[];
  licensedUserCount?: number;
  maxScore?: number;
  vendorInformation?: SecurityVendorInformation;
  //#endregion
}