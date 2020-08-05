import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { 
  ODataClient,
  ODataService, 
  ODataEntity, 
  ODataEntities, 
  ODataProperty, 
  EntityKey,
  Duration,
  ODataEntityResource,
  ODataEntitySetResource,
  ODataNavigationPropertyResource,
  ODataActionResource,
  ODataFunctionResource,
  HttpOptions
} from 'angular-odata';

//#region ODataApi Imports
import { MailTipsType } from './mailtipstype.enum';
import { ExchangeIdFormat } from './exchangeidformat.enum';
import { AssignedLicense } from './assignedlicense.entity';
import { AssignedPlan } from './assignedplan.entity';
import { ObjectIdentity } from './objectidentity.entity';
import { LicenseAssignmentState } from './licenseassignmentstate.entity';
import { OnPremisesExtensionAttributes } from './onpremisesextensionattributes.entity';
import { OnPremisesProvisioningError } from './onpremisesprovisioningerror.entity';
import { PasswordProfile } from './passwordprofile.entity';
import { ProvisionedPlan } from './provisionedplan.entity';
import { MailboxSettings } from './mailboxsettings.entity';
import { AttendeeBase } from './attendeebase.entity';
import { LocationConstraint } from './locationconstraint.entity';
import { MeetingTimeSuggestionsResult } from './meetingtimesuggestionsresult.entity';
import { TimeConstraint } from './timeconstraint.entity';
import { MailTips } from './mailtips.entity';
import { ConvertIdResult } from './convertidresult.entity';
import { ManagedAppDiagnosticStatus } from './managedappdiagnosticstatus.entity';
import { DirectoryObject } from './directoryobject.entity';
import { User } from './user.entity';
import { Message } from './message.entity';
import { DriveItem } from './driveitem.entity';
import { ManagedAppPolicy } from './managedapppolicy.entity';
//#endregion

@Injectable()
export class UsersService extends ODataService<User> {
  constructor(protected client: ODataClient) {
    super(client, 'users', 'microsoft.graph.user');
  }

  //#region ODataApi Actions
  public assignLicense(entity: EntityKey<User>): ODataActionResource<{addLicenses: AssignedLicense[], removeLicenses: string[]}, User> {
    const resource = this.entity(entity).action<{addLicenses: AssignedLicense[], removeLicenses: string[]}, User>('microsoft.graph.assignLicense');
    return resource;
  }
  public changePassword(entity: EntityKey<User>): ODataActionResource<{currentPassword: string, newPassword: string}, any> {
    const resource = this.entity(entity).action<{currentPassword: string, newPassword: string}, any>('microsoft.graph.changePassword');
    return resource;
  }
  public revokeSignInSessions(entity: EntityKey<User>): ODataActionResource<null, boolean> {
    const resource = this.entity(entity).action<null, boolean>('microsoft.graph.revokeSignInSessions');
    return resource;
  }
  public reprocessLicenseAssignment(entity: EntityKey<User>): ODataActionResource<null, User> {
    const resource = this.entity(entity).action<null, User>('microsoft.graph.reprocessLicenseAssignment');
    return resource;
  }
  public findMeetingTimes(entity: EntityKey<User>): ODataActionResource<{attendees: AttendeeBase[], locationConstraint: LocationConstraint, timeConstraint: TimeConstraint, meetingDuration: Duration, maxCandidates: number, isOrganizerOptional: boolean, returnSuggestionReasons: boolean, minimumAttendeePercentage: number}, MeetingTimeSuggestionsResult> {
    const resource = this.entity(entity).action<{attendees: AttendeeBase[], locationConstraint: LocationConstraint, timeConstraint: TimeConstraint, meetingDuration: Duration, maxCandidates: number, isOrganizerOptional: boolean, returnSuggestionReasons: boolean, minimumAttendeePercentage: number}, MeetingTimeSuggestionsResult>('microsoft.graph.findMeetingTimes');
    return resource;
  }
  public sendMail(entity: EntityKey<User>): ODataActionResource<{Message: Message, SaveToSentItems: boolean}, any> {
    const resource = this.entity(entity).action<{Message: Message, SaveToSentItems: boolean}, any>('microsoft.graph.sendMail');
    return resource;
  }
  public getMailTips(entity: EntityKey<User>): ODataActionResource<{EmailAddresses: string[], MailTipsOptions: MailTipsType}, MailTips> {
    const resource = this.entity(entity).action<{EmailAddresses: string[], MailTipsOptions: MailTipsType}, MailTips>('microsoft.graph.getMailTips');
    return resource;
  }
  public translateExchangeIds(entity: EntityKey<User>): ODataActionResource<{InputIds: string[], TargetIdType: ExchangeIdFormat, SourceIdType: ExchangeIdFormat}, ConvertIdResult> {
    const resource = this.entity(entity).action<{InputIds: string[], TargetIdType: ExchangeIdFormat, SourceIdType: ExchangeIdFormat}, ConvertIdResult>('microsoft.graph.translateExchangeIds');
    return resource;
  }
  public removeAllDevicesFromManagement(entity: EntityKey<User>): ODataActionResource<null, any> {
    const resource = this.entity(entity).action<null, any>('microsoft.graph.removeAllDevicesFromManagement');
    return resource;
  }
  public wipeManagedAppRegistrationsByDeviceTag(entity: EntityKey<User>): ODataActionResource<{deviceTag: string}, any> {
    const resource = this.entity(entity).action<{deviceTag: string}, any>('microsoft.graph.wipeManagedAppRegistrationsByDeviceTag');
    return resource;
  }
  public exportPersonalData(entity: EntityKey<User>): ODataActionResource<{storageLocation: string}, any> {
    const resource = this.entity(entity).action<{storageLocation: string}, any>('microsoft.graph.exportPersonalData');
    return resource;
  }
  //#endregion
  //#region ODataApi Functions
  public delta(): ODataFunctionResource<null, User> {
    const resource = this.entities().function<null, User>('microsoft.graph.delta');
    return resource;
  }
  public getManagedAppDiagnosticStatuses(entity: EntityKey<User>): ODataFunctionResource<null, ManagedAppDiagnosticStatus> {
    const resource = this.entity(entity).function<null, ManagedAppDiagnosticStatus>('microsoft.graph.getManagedAppDiagnosticStatuses');
    return resource;
  }
  public getManagedAppPolicies(entity: EntityKey<User>): ODataFunctionResource<null, ManagedAppPolicy> {
    const resource = this.entity(entity).function<null, ManagedAppPolicy>('microsoft.graph.getManagedAppPolicies');
    return resource;
  }
  //#endregion
  //#region ODataApi Navigations
  public createdObjects(entity: EntityKey<User>): ODataNavigationPropertyResource<DirectoryObject> {
    return this.entity(entity).navigationProperty<DirectoryObject>('createdObjects');
  }
  public directReports(entity: EntityKey<User>): ODataNavigationPropertyResource<DirectoryObject> {
    return this.entity(entity).navigationProperty<DirectoryObject>('directReports');
  }
  public createdByUser(entity: EntityKey<User>): ODataNavigationPropertyResource<User> {
    return this.entity(entity).navigationProperty<User>('drive/items/createdByUser');
  }
  public lastModifiedByUser(entity: EntityKey<User>): ODataNavigationPropertyResource<User> {
    return this.entity(entity).navigationProperty<User>('drive/items/lastModifiedByUser');
  }
  public manager(entity: EntityKey<User>): ODataNavigationPropertyResource<DirectoryObject> {
    return this.entity(entity).navigationProperty<DirectoryObject>('manager');
  }
  public memberOf(entity: EntityKey<User>): ODataNavigationPropertyResource<DirectoryObject> {
    return this.entity(entity).navigationProperty<DirectoryObject>('memberOf');
  }
  public ownedDevices(entity: EntityKey<User>): ODataNavigationPropertyResource<DirectoryObject> {
    return this.entity(entity).navigationProperty<DirectoryObject>('ownedDevices');
  }
  public ownedObjects(entity: EntityKey<User>): ODataNavigationPropertyResource<DirectoryObject> {
    return this.entity(entity).navigationProperty<DirectoryObject>('ownedObjects');
  }
  public registeredDevices(entity: EntityKey<User>): ODataNavigationPropertyResource<DirectoryObject> {
    return this.entity(entity).navigationProperty<DirectoryObject>('registeredDevices');
  }
  public transitiveMemberOf(entity: EntityKey<User>): ODataNavigationPropertyResource<DirectoryObject> {
    return this.entity(entity).navigationProperty<DirectoryObject>('transitiveMemberOf');
  }
  //#endregion
}
