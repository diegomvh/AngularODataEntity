import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { SizeRange } from './sizerange.entity';
import { SizeRangeCollection } from './sizerange.collection';
//#endregion

export class SizeRangeModel<E extends SizeRange> extends ODataModel<E> {
  //#region ODataApi Properties
  maximumSize?: number;
  minimumSize?: number;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}