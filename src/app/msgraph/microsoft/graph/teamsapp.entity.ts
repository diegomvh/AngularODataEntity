import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { TeamsAppDistributionMethod } from './teamsappdistributionmethod.enum';
import { TeamsAppDefinition } from './teamsappdefinition.entity';
//#endregion

export interface TeamsApp extends Entity {
  //#region ODataApi Properties
  externalId?: string;
  displayName?: string;
  distributionMethod?: TeamsAppDistributionMethod;
  appDefinitions?: TeamsAppDefinition[];
  //#endregion
}