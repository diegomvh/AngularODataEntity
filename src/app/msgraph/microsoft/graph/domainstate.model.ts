import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DomainState } from './domainstate.entity';
import { DomainStateCollection } from './domainstate.collection';
//#endregion

export class DomainStateModel<E extends DomainState> extends ODataModel<E> {
  //#region ODataApi Properties
  lastActionDateTime?: Date;
  operation?: string;
  status?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}