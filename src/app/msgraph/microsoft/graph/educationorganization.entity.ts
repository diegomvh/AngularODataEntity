import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { EducationExternalSource } from './educationexternalsource.enum';
import { EntityModel } from './entity.model';
import { EntityCollection } from './entity.collection';
//#endregion

export interface EducationOrganization extends Entity {
  //#region ODataApi Properties
  description?: string;
  displayName: string;
  externalSource?: EducationExternalSource;
  //#endregion
}