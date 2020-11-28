import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { PersonType } from './persontype.entity';
import { PersonTypeCollection } from './persontype.collection';
//#endregion

export class PersonTypeModel<E extends PersonType> extends ODataModel<E> {
  //#region ODataApi Properties
  class?: string;
  subclass?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}