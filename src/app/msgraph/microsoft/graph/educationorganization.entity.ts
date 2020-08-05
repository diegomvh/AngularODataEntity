import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { EducationExternalSource } from './educationexternalsource.enum';
//#endregion

export interface EducationOrganization extends Entity {
  //#region ODataApi Properties
  displayName: string;
  description?: string;
  externalSource?: EducationExternalSource;
  //#endregion
}