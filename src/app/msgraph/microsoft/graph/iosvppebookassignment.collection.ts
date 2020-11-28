import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ManagedEBookAssignmentCollection } from './managedebookassignment.collection';
import { IosVppEBookAssignment } from './iosvppebookassignment.entity';
import { IosVppEBookAssignmentModel } from './iosvppebookassignment.model';
//#endregion

export class IosVppEBookAssignmentCollection<E extends IosVppEBookAssignment, M extends IosVppEBookAssignmentModel<E>> extends ManagedEBookAssignmentCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}