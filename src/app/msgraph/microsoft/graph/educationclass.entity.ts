import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { EducationExternalSource } from './educationexternalsource.enum';
import { EducationTerm } from './educationterm.complex';
import { IdentitySet } from './identityset.complex';
import { Group } from './group.entity';
import { EducationUser } from './educationuser.entity';
import { EducationSchool } from './educationschool.entity';
import { EducationTermModel } from './educationterm.model';
import { IdentitySetModel } from './identityset.model';
import { EntityModel } from './entity.model';
import { GroupModel } from './group.model';
import { EducationUserModel } from './educationuser.model';
import { EducationSchoolModel } from './educationschool.model';
import { EducationTermCollection } from './educationterm.collection';
import { IdentitySetCollection } from './identityset.collection';
import { EntityCollection } from './entity.collection';
import { GroupCollection } from './group.collection';
import { EducationUserCollection } from './educationuser.collection';
import { EducationSchoolCollection } from './educationschool.collection';
//#endregion

export interface EducationClass extends Entity {
  //#region ODataApi Properties
  classCode?: string;
  createdBy?: IdentitySet;
  description?: string;
  displayName: string;
  externalId?: string;
  externalName?: string;
  externalSource?: EducationExternalSource;
  mailNickname: string;
  term?: EducationTerm;
  group?: Group;
  members?: EducationUser[];
  schools?: EducationSchool[];
  teachers?: EducationUser[];
  //#endregion
}