import { ODataModel, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Airline } from './airline.entity';
import { AirlineCollection } from './airline.collection';
//#endregion

export class AirlineModel<E extends Airline> extends ODataModel<E> {
  //#region ODataApi Properties
  AirlineCode: string;
  Name: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}