import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { SelectionLikelihoodInfo } from './selectionlikelihoodinfo.enum';
import { ScoredEmailAddress } from './scoredemailaddress.complex';
import { ScoredEmailAddressModel } from './scoredemailaddress.model';
//#endregion

export class ScoredEmailAddressCollection<E extends ScoredEmailAddress, M extends ScoredEmailAddressModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}