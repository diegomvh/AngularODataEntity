import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { PlannerProgressTaskBoardTaskFormat } from './plannerprogresstaskboardtaskformat.entity';
import { PlannerProgressTaskBoardTaskFormatCollection } from './plannerprogresstaskboardtaskformat.collection';
//#endregion

export class PlannerProgressTaskBoardTaskFormatModel<E extends PlannerProgressTaskBoardTaskFormat> extends EntityModel<E> {
  //#region ODataApi Properties
  orderHint?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}