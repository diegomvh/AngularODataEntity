import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { MimeContent } from './mimecontent.complex';
import { DeviceInstallState } from './deviceinstallstate.entity';
import { EBookInstallSummary } from './ebookinstallsummary.entity';
import { ManagedEBookAssignment } from './managedebookassignment.entity';
import { UserInstallStateSummary } from './userinstallstatesummary.entity';
import { MimeContentModel } from './mimecontent.model';
import { EntityModel } from './entity.model';
import { DeviceInstallStateModel } from './deviceinstallstate.model';
import { EBookInstallSummaryModel } from './ebookinstallsummary.model';
import { ManagedEBookAssignmentModel } from './managedebookassignment.model';
import { UserInstallStateSummaryModel } from './userinstallstatesummary.model';
import { MimeContentCollection } from './mimecontent.collection';
import { EntityCollection } from './entity.collection';
import { DeviceInstallStateCollection } from './deviceinstallstate.collection';
import { EBookInstallSummaryCollection } from './ebookinstallsummary.collection';
import { ManagedEBookAssignmentCollection } from './managedebookassignment.collection';
import { UserInstallStateSummaryCollection } from './userinstallstatesummary.collection';
//#endregion

export interface ManagedEBook extends Entity {
  //#region ODataApi Properties
  createdDateTime: Date;
  description?: string;
  displayName: string;
  informationUrl?: string;
  largeCover?: MimeContent;
  lastModifiedDateTime: Date;
  privacyInformationUrl?: string;
  publishedDateTime: Date;
  publisher?: string;
  assignments?: ManagedEBookAssignment[];
  deviceStates?: DeviceInstallState[];
  installSummary?: EBookInstallSummary;
  userStateSummary?: UserInstallStateSummary[];
  //#endregion
}