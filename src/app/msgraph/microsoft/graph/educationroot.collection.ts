import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { EducationClass } from './educationclass.entity';
import { EducationUser } from './educationuser.entity';
import { EducationSchool } from './educationschool.entity';
import { EducationRoot } from './educationroot.entity';
import { EducationClassModel } from './educationclass.model';
import { EducationUserModel } from './educationuser.model';
import { EducationSchoolModel } from './educationschool.model';
import { EducationRootModel } from './educationroot.model';
import { EducationClassCollection } from './educationclass.collection';
import { EducationUserCollection } from './educationuser.collection';
import { EducationSchoolCollection } from './educationschool.collection';
//#endregion

export class EducationRootCollection<E extends EducationRoot, M extends EducationRootModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}