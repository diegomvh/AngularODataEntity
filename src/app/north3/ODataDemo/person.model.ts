import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Person } from './person.entity';
import { PersonCollection } from './person.collection';
//#endregion

export class PersonModel<E extends Person> extends ODataModel<E> {
  //#region ODataApi Properties
  ID: number;
  Name?: string;
  PersonDetail?: PersonDetailModel<PersonDetail>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}