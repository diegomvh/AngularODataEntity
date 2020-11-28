import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { WorkforceIntegration } from './workforceintegration.entity';
import { EntityModel } from './entity.model';
import { WorkforceIntegrationModel } from './workforceintegration.model';
import { EntityCollection } from './entity.collection';
import { WorkforceIntegrationCollection } from './workforceintegration.collection';
//#endregion

export interface Teamwork extends Entity {
  //#region ODataApi Properties
  workforceIntegrations?: WorkforceIntegration[];
  //#endregion
}