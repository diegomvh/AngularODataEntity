import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ControlScore } from './controlscore.complex';
import { ControlScoreModel } from './controlscore.model';
//#endregion

export class ControlScoreCollection<E extends ControlScore, M extends ControlScoreModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}