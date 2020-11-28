import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { AssignedLabel } from './assignedlabel.entity';
import { AssignedLabelCollection } from './assignedlabel.collection';
//#endregion

export class AssignedLabelModel<E extends AssignedLabel> extends ODataModel<E> {
  //#region ODataApi Properties
  displayName?: string;
  labelId?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}