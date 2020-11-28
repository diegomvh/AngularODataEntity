import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { PersonOrGroupColumn } from './personorgroupcolumn.entity';
import { PersonOrGroupColumnModel } from './personorgroupcolumn.model';
//#endregion

export class PersonOrGroupColumnCollection<E extends PersonOrGroupColumn, M extends PersonOrGroupColumnModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}