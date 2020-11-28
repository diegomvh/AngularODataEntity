import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { IncompleteData } from './incompletedata.complex';
import { IncompleteDataModel } from './incompletedata.model';
//#endregion

export class IncompleteDataCollection<E extends IncompleteData, M extends IncompleteDataModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}