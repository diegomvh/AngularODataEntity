import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { RiskLevel } from './risklevel.enum';
import { ConditionalAccessClientApp } from './conditionalaccessclientapp.enum';
import { ConditionalAccessApplications } from './conditionalaccessapplications.entity';
import { ConditionalAccessUsers } from './conditionalaccessusers.entity';
import { ConditionalAccessPlatforms } from './conditionalaccessplatforms.entity';
import { ConditionalAccessLocations } from './conditionalaccesslocations.entity';
//#endregion

export interface ConditionalAccessConditionSet {
  //#region ODataApi Properties
  applications?: ConditionalAccessApplications;
  users: ConditionalAccessUsers;
  signInRiskLevels: RiskLevel;
  platforms?: ConditionalAccessPlatforms;
  locations?: ConditionalAccessLocations;
  clientAppTypes: ConditionalAccessClientApp;
  //#endregion
}