import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EducationTerm } from './educationterm.entity';
import { EducationTermModel } from './educationterm.model';
//#endregion

export class EducationTermCollection<E extends EducationTerm, M extends EducationTermModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}