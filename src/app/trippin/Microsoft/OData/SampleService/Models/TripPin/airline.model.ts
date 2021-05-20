import { Model, ModelField, ODataModel, ODataCollection, HttpOptions, Duration, Expand, Select } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Airline } from './airline.entity';
import { AirlineCollection } from './airline.collection';
//#endregion

@Model()
export class AirlineModel<E extends Airline> extends ODataModel<E> {
  //#region ODataApi Properties
  @ModelField()
  AirlineCode!: string;
  
  
  @ModelField()
  Name!: string;
  
  
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}