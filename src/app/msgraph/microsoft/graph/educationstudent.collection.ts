import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EducationGender } from './educationgender.enum';
import { EducationStudent } from './educationstudent.complex';
import { EducationStudentModel } from './educationstudent.model';
//#endregion

export class EducationStudentCollection<E extends EducationStudent, M extends EducationStudentModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}