import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { EBookInstallSummary } from './ebookinstallsummary.entity';
import { EBookInstallSummaryModel } from './ebookinstallsummary.model';
//#endregion

export class EBookInstallSummaryCollection<E extends EBookInstallSummary, M extends EBookInstallSummaryModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}