import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { PlannerExternalReferences } from './plannerexternalreferences.complex';
import { PlannerExternalReferencesModel } from './plannerexternalreferences.model';
//#endregion

export class PlannerExternalReferencesCollection<E extends PlannerExternalReferences, M extends PlannerExternalReferencesModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}