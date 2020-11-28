import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EducationTeacher } from './educationteacher.entity';
import { EducationTeacherModel } from './educationteacher.model';
//#endregion

export class EducationTeacherCollection<E extends EducationTeacher, M extends EducationTeacherModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}