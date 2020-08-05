import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { MimeContent } from './mimecontent.entity';
import { ManagedEBookAssignment } from './managedebookassignment.entity';
import { EBookInstallSummary } from './ebookinstallsummary.entity';
import { DeviceInstallState } from './deviceinstallstate.entity';
import { UserInstallStateSummary } from './userinstallstatesummary.entity';
//#endregion

export interface ManagedEBook extends Entity {
  //#region ODataApi Properties
  displayName: string;
  description?: string;
  publisher?: string;
  publishedDateTime: Date;
  largeCover?: MimeContent;
  createdDateTime: Date;
  lastModifiedDateTime: Date;
  informationUrl?: string;
  privacyInformationUrl?: string;
  assignments?: ManagedEBookAssignment[];
  installSummary?: EBookInstallSummary;
  deviceStates?: DeviceInstallState[];
  userStateSummary?: UserInstallStateSummary[];
  //#endregion
}