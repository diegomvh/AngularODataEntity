import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { AverageComparativeScore } from './averagecomparativescore.complex';
import { AverageComparativeScoreCollection } from './averagecomparativescore.collection';
//#endregion

export class AverageComparativeScoreModel<E extends AverageComparativeScore> extends ODataModel<E> {
  //#region ODataApi Properties
  averageScore?: number;
  basis?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}