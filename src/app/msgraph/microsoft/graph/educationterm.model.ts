import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EducationTerm } from './educationterm.entity';
import { EducationTermCollection } from './educationterm.collection';
//#endregion

export class EducationTermModel<E extends EducationTerm> extends ODataModel<E> {
  //#region ODataApi Properties
  displayName?: string;
  endDate?: Date;
  externalId?: string;
  startDate?: Date;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}