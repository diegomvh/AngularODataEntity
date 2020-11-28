import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { EducationClass } from './educationclass.entity';
import { EducationUser } from './educationuser.entity';
import { EducationSchool } from './educationschool.entity';
import { EducationRoot } from './educationroot.entity';
import { EducationClassModel } from './educationclass.model';
import { EducationUserModel } from './educationuser.model';
import { EducationSchoolModel } from './educationschool.model';
import { EducationClassCollection } from './educationclass.collection';
import { EducationUserCollection } from './educationuser.collection';
import { EducationSchoolCollection } from './educationschool.collection';
import { EducationRootCollection } from './educationroot.collection';
//#endregion

export class EducationRootModel<E extends EducationRoot> extends EntityModel<E> {
  //#region ODataApi Properties
  classes?: EducationClassCollection<EducationClass, EducationClassModel<EducationClass>>;
  me?: EducationUserModel<EducationUser>;
  schools?: EducationSchoolCollection<EducationSchool, EducationSchoolModel<EducationSchool>>;
  users?: EducationUserCollection<EducationUser, EducationUserModel<EducationUser>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}