import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { TeamsAppDistributionMethod } from './teamsappdistributionmethod.enum';
import { TeamsAppDefinition } from './teamsappdefinition.entity';
import { EntityModel } from './entity.model';
import { TeamsAppDefinitionModel } from './teamsappdefinition.model';
import { EntityCollection } from './entity.collection';
import { TeamsAppDefinitionCollection } from './teamsappdefinition.collection';
//#endregion

export interface TeamsApp extends Entity {
  //#region ODataApi Properties
  displayName?: string;
  distributionMethod?: TeamsAppDistributionMethod;
  externalId?: string;
  appDefinitions?: TeamsAppDefinition[];
  //#endregion
}