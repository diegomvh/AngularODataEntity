import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { EducationExternalSource } from './educationexternalsource.enum';
import { EducationTerm } from './educationterm.entity';
import { IdentitySet } from './identityset.entity';
import { Group } from './group.entity';
import { EducationClass } from './educationclass.entity';
import { EducationUser } from './educationuser.entity';
import { EducationSchool } from './educationschool.entity';
import { EducationTermModel } from './educationterm.model';
import { IdentitySetModel } from './identityset.model';
import { GroupModel } from './group.model';
import { EducationUserModel } from './educationuser.model';
import { EducationSchoolModel } from './educationschool.model';
import { EducationTermCollection } from './educationterm.collection';
import { IdentitySetCollection } from './identityset.collection';
import { GroupCollection } from './group.collection';
import { EducationClassCollection } from './educationclass.collection';
import { EducationUserCollection } from './educationuser.collection';
import { EducationSchoolCollection } from './educationschool.collection';
//#endregion

export class EducationClassModel<E extends EducationClass> extends EntityModel<E> {
  //#region ODataApi Properties
  classCode?: string;
  createdBy?: IdentitySetModel<IdentitySet>;
  description?: string;
  displayName: string;
  externalId?: string;
  externalName?: string;
  externalSource?: EducationExternalSource;
  mailNickname: string;
  term?: EducationTermModel<EducationTerm>;
  group?: GroupModel<Group>;
  members?: EducationUserCollection<EducationUser, EducationUserModel<EducationUser>>;
  schools?: EducationSchoolCollection<EducationSchool, EducationSchoolModel<EducationSchool>>;
  teachers?: EducationUserCollection<EducationUser, EducationUserModel<EducationUser>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}