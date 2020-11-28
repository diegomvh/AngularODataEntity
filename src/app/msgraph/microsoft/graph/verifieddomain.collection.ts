import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { VerifiedDomain } from './verifieddomain.entity';
import { VerifiedDomainModel } from './verifieddomain.model';
//#endregion

export class VerifiedDomainCollection<E extends VerifiedDomain, M extends VerifiedDomainModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}