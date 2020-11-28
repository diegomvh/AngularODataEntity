import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { MimeContent } from './mimecontent.complex';
import { ManagedEBook } from './managedebook.entity';
import { DeviceInstallState } from './deviceinstallstate.entity';
import { EBookInstallSummary } from './ebookinstallsummary.entity';
import { ManagedEBookAssignment } from './managedebookassignment.entity';
import { UserInstallStateSummary } from './userinstallstatesummary.entity';
import { MimeContentModel } from './mimecontent.model';
import { ManagedEBookModel } from './managedebook.model';
import { DeviceInstallStateModel } from './deviceinstallstate.model';
import { EBookInstallSummaryModel } from './ebookinstallsummary.model';
import { ManagedEBookAssignmentModel } from './managedebookassignment.model';
import { UserInstallStateSummaryModel } from './userinstallstatesummary.model';
import { MimeContentCollection } from './mimecontent.collection';
import { DeviceInstallStateCollection } from './deviceinstallstate.collection';
import { EBookInstallSummaryCollection } from './ebookinstallsummary.collection';
import { ManagedEBookAssignmentCollection } from './managedebookassignment.collection';
import { UserInstallStateSummaryCollection } from './userinstallstatesummary.collection';
//#endregion

export class ManagedEBookCollection<E extends ManagedEBook, M extends ManagedEBookModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}