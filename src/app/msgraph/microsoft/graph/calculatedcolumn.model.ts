import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { CalculatedColumn } from './calculatedcolumn.entity';
import { CalculatedColumnCollection } from './calculatedcolumn.collection';
//#endregion

export class CalculatedColumnModel<E extends CalculatedColumn> extends ODataModel<E> {
  //#region ODataApi Properties
  format?: string;
  formula?: string;
  outputType?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}