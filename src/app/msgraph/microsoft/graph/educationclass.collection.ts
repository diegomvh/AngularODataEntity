import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { EducationExternalSource } from './educationexternalsource.enum';
import { EducationTerm } from './educationterm.complex';
import { IdentitySet } from './identityset.complex';
import { Group } from './group.entity';
import { EducationClass } from './educationclass.entity';
import { EducationUser } from './educationuser.entity';
import { EducationSchool } from './educationschool.entity';
import { EducationTermModel } from './educationterm.model';
import { IdentitySetModel } from './identityset.model';
import { GroupModel } from './group.model';
import { EducationClassModel } from './educationclass.model';
import { EducationUserModel } from './educationuser.model';
import { EducationSchoolModel } from './educationschool.model';
import { EducationTermCollection } from './educationterm.collection';
import { IdentitySetCollection } from './identityset.collection';
import { GroupCollection } from './group.collection';
import { EducationUserCollection } from './educationuser.collection';
import { EducationSchoolCollection } from './educationschool.collection';
//#endregion

export class EducationClassCollection<E extends EducationClass, M extends EducationClassModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}