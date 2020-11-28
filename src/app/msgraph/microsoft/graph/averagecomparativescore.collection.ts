import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { AverageComparativeScore } from './averagecomparativescore.entity';
import { AverageComparativeScoreModel } from './averagecomparativescore.model';
//#endregion

export class AverageComparativeScoreCollection<E extends AverageComparativeScore, M extends AverageComparativeScoreModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}