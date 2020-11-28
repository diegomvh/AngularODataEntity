import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { EducationClass } from './educationclass.entity';
import { EducationUser } from './educationuser.entity';
import { EducationSchool } from './educationschool.entity';
import { EntityModel } from './entity.model';
import { EducationClassModel } from './educationclass.model';
import { EducationUserModel } from './educationuser.model';
import { EducationSchoolModel } from './educationschool.model';
import { EntityCollection } from './entity.collection';
import { EducationClassCollection } from './educationclass.collection';
import { EducationUserCollection } from './educationuser.collection';
import { EducationSchoolCollection } from './educationschool.collection';
//#endregion

export interface EducationRoot extends Entity {
  //#region ODataApi Properties
  classes?: EducationClass[];
  me?: EducationUser;
  schools?: EducationSchool[];
  users?: EducationUser[];
  //#endregion
}