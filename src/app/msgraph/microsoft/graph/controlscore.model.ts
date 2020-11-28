import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ControlScore } from './controlscore.entity';
import { ControlScoreCollection } from './controlscore.collection';
//#endregion

export class ControlScoreModel<E extends ControlScore> extends ODataModel<E> {
  //#region ODataApi Properties
  controlCategory?: string;
  controlName?: string;
  description?: string;
  score?: number;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}