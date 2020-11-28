import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { HostSecurityState } from './hostsecuritystate.entity';
import { HostSecurityStateModel } from './hostsecuritystate.model';
//#endregion

export class HostSecurityStateCollection<E extends HostSecurityState, M extends HostSecurityStateModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}