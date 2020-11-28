import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { AlternativeSecurityId } from './alternativesecurityid.entity';
import { AlternativeSecurityIdModel } from './alternativesecurityid.model';
//#endregion

export class AlternativeSecurityIdCollection<E extends AlternativeSecurityId, M extends AlternativeSecurityIdModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}