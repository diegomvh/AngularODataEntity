import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { SelectionLikelihoodInfo } from './selectionlikelihoodinfo.enum';
import { ScoredEmailAddress } from './scoredemailaddress.entity';
import { ScoredEmailAddressCollection } from './scoredemailaddress.collection';
//#endregion

export class ScoredEmailAddressModel<E extends ScoredEmailAddress> extends ODataModel<E> {
  //#region ODataApi Properties
  address?: string;
  itemId?: string;
  relevanceScore?: number;
  selectionLikelihood?: SelectionLikelihoodInfo;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}