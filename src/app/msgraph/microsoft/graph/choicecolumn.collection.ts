import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ChoiceColumn } from './choicecolumn.complex';
import { ChoiceColumnModel } from './choicecolumn.model';
//#endregion

export class ChoiceColumnCollection<E extends ChoiceColumn, M extends ChoiceColumnModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}