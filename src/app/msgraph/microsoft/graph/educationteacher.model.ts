import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EducationTeacher } from './educationteacher.entity';
import { EducationTeacherCollection } from './educationteacher.collection';
//#endregion

export class EducationTeacherModel<E extends EducationTeacher> extends ODataModel<E> {
  //#region ODataApi Properties
  externalId?: string;
  teacherNumber?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}