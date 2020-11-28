import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EducationGender } from './educationgender.enum';
import { EducationStudent } from './educationstudent.complex';
import { EducationStudentCollection } from './educationstudent.collection';
//#endregion

export class EducationStudentModel<E extends EducationStudent> extends ODataModel<E> {
  //#region ODataApi Properties
  birthDate?: Date;
  externalId?: string;
  gender?: EducationGender;
  grade?: string;
  graduationYear?: string;
  studentNumber?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}