import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { PlannerProgressTaskBoardTaskFormat } from './plannerprogresstaskboardtaskformat.entity';
import { PlannerProgressTaskBoardTaskFormatModel } from './plannerprogresstaskboardtaskformat.model';
//#endregion

export class PlannerProgressTaskBoardTaskFormatCollection<E extends PlannerProgressTaskBoardTaskFormat, M extends PlannerProgressTaskBoardTaskFormatModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}