import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { SecurityVendorInformation } from './securityvendorinformation.entity';
import { AverageComparativeScore } from './averagecomparativescore.entity';
import { ControlScore } from './controlscore.entity';
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