import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { MimeContent } from './mimecontent.entity';
import { ManagedEBook } from './managedebook.entity';
import { DeviceInstallState } from './deviceinstallstate.entity';
import { EBookInstallSummary } from './ebookinstallsummary.entity';
import { ManagedEBookAssignment } from './managedebookassignment.entity';
import { UserInstallStateSummary } from './userinstallstatesummary.entity';
import { MimeContentModel } from './mimecontent.model';
import { DeviceInstallStateModel } from './deviceinstallstate.model';
import { EBookInstallSummaryModel } from './ebookinstallsummary.model';
import { ManagedEBookAssignmentModel } from './managedebookassignment.model';
import { UserInstallStateSummaryModel } from './userinstallstatesummary.model';
import { MimeContentCollection } from './mimecontent.collection';
import { ManagedEBookCollection } from './managedebook.collection';
import { DeviceInstallStateCollection } from './deviceinstallstate.collection';
import { EBookInstallSummaryCollection } from './ebookinstallsummary.collection';
import { ManagedEBookAssignmentCollection } from './managedebookassignment.collection';
import { UserInstallStateSummaryCollection } from './userinstallstatesummary.collection';
//#endregion

export class ManagedEBookModel<E extends ManagedEBook> extends EntityModel<E> {
  //#region ODataApi Properties
  createdDateTime: Date;
  description?: string;
  displayName: string;
  informationUrl?: string;
  largeCover?: MimeContentModel<MimeContent>;
  lastModifiedDateTime: Date;
  privacyInformationUrl?: string;
  publishedDateTime: Date;
  publisher?: string;
  assignments?: ManagedEBookAssignmentCollection<ManagedEBookAssignment, ManagedEBookAssignmentModel<ManagedEBookAssignment>>;
  deviceStates?: DeviceInstallStateCollection<DeviceInstallState, DeviceInstallStateModel<DeviceInstallState>>;
  installSummary?: EBookInstallSummaryModel<EBookInstallSummary>;
  userStateSummary?: UserInstallStateSummaryCollection<UserInstallStateSummary, UserInstallStateSummaryModel<UserInstallStateSummary>>;
  //#endregion
  //#region ODataApi Actions
  public assign(managedEBookAssignments: ManagedEBookAssignment[], options?: HttpOptions): Observable<any> {
    var res = this._action<{managedEBookAssignments: ManagedEBookAssignment[]}, any>('microsoft.graph.assign');
    res.segment.entitySet('');
    return res.call({managedEBookAssignments}, 'property', options) as Observable<any>;
  }
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}