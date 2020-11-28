import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { SiuPrincipal } from './siuprincipal.entity';
import { SiuPrincipalModel } from './siuprincipal.model';
//#endregion

export class SiuPrincipalCollection<E extends SiuPrincipal, M extends SiuPrincipalModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}