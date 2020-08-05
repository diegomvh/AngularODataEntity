import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { EducationClass } from './educationclass.entity';
import { EducationSchool } from './educationschool.entity';
import { EducationUser } from './educationuser.entity';
//#endregion

export interface EducationRoot extends Entity {
  //#region ODataApi Properties
  classes?: EducationClass[];
  schools?: EducationSchool[];
  users?: EducationUser[];
  me?: EducationUser;
  //#endregion
}