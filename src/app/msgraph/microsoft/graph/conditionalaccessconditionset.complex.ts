import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { RiskLevel } from './risklevel.enum';
import { ConditionalAccessClientApp } from './conditionalaccessclientapp.enum';
import { ConditionalAccessApplications } from './conditionalaccessapplications.complex';
import { ConditionalAccessLocations } from './conditionalaccesslocations.complex';
import { ConditionalAccessPlatforms } from './conditionalaccessplatforms.complex';
import { ConditionalAccessUsers } from './conditionalaccessusers.complex';
import { ConditionalAccessApplicationsModel } from './conditionalaccessapplications.model';
import { ConditionalAccessLocationsModel } from './conditionalaccesslocations.model';
import { ConditionalAccessPlatformsModel } from './conditionalaccessplatforms.model';
import { ConditionalAccessUsersModel } from './conditionalaccessusers.model';
import { ConditionalAccessApplicationsCollection } from './conditionalaccessapplications.collection';
import { ConditionalAccessLocationsCollection } from './conditionalaccesslocations.collection';
import { ConditionalAccessPlatformsCollection } from './conditionalaccessplatforms.collection';
import { ConditionalAccessUsersCollection } from './conditionalaccessusers.collection';
//#endregion

export interface ConditionalAccessConditionSet {
  //#region ODataApi Properties
  applications?: ConditionalAccessApplications;
  clientAppTypes: ConditionalAccessClientApp;
  locations?: ConditionalAccessLocations;
  platforms?: ConditionalAccessPlatforms;
  signInRiskLevels: RiskLevel;
  users: ConditionalAccessUsers;
  //#endregion
}