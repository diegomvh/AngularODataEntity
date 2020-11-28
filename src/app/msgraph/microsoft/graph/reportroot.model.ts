import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { Report } from './report.complex';
import { ReportRoot } from './reportroot.entity';
import { ReportModel } from './report.model';
import { ReportCollection } from './report.collection';
import { ReportRootCollection } from './reportroot.collection';
//#endregion

export class ReportRootModel<E extends ReportRoot> extends EntityModel<E> {
  //#region ODataApi Properties
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  public deviceConfigurationDeviceActivity(options?: HttpOptions): Observable<ReportModel<Report>> {
    var res = this._function<null, Report>('microsoft.graph.deviceConfigurationDeviceActivity');
    res.segment.entitySet('');
    return res.call(null, 'model', options) as Observable<ReportModel<Report>>;
  }
  public deviceConfigurationUserActivity(options?: HttpOptions): Observable<ReportModel<Report>> {
    var res = this._function<null, Report>('microsoft.graph.deviceConfigurationUserActivity');
    res.segment.entitySet('');
    return res.call(null, 'model', options) as Observable<ReportModel<Report>>;
  }
  public managedDeviceEnrollmentFailureDetails(skip?: number, top?: number, filter?: string, skipToken?: string, options?: HttpOptions): Observable<ReportModel<Report>> {
    var res = this._function<{skip?: number, top?: number, filter?: string, skipToken?: string}, Report>('microsoft.graph.managedDeviceEnrollmentFailureDetails');
    res.segment.entitySet('');
    return res.call({skip, top, filter, skipToken}, 'model', options) as Observable<ReportModel<Report>>;
  }
  public managedDeviceEnrollmentTopFailures(period?: string, options?: HttpOptions): Observable<ReportModel<Report>> {
    var res = this._function<{period?: string}, Report>('microsoft.graph.managedDeviceEnrollmentTopFailures');
    res.segment.entitySet('');
    return res.call({period}, 'model', options) as Observable<ReportModel<Report>>;
  }
  public getEmailActivityCounts(period: string, options?: HttpOptions): Observable<ReportModel<Report>> {
    var res = this._function<{period: string}, Report>('microsoft.graph.getEmailActivityCounts');
    res.segment.entitySet('');
    return res.call({period}, 'model', options) as Observable<ReportModel<Report>>;
  }
  public getEmailActivityUserCounts(period: string, options?: HttpOptions): Observable<ReportModel<Report>> {
    var res = this._function<{period: string}, Report>('microsoft.graph.getEmailActivityUserCounts');
    res.segment.entitySet('');
    return res.call({period}, 'model', options) as Observable<ReportModel<Report>>;
  }
  public getEmailActivityUserDetail(date?: Date, period?: string, options?: HttpOptions): Observable<ReportModel<Report>> {
    var res = this._function<{date?: Date, period?: string}, Report>('microsoft.graph.getEmailActivityUserDetail');
    res.segment.entitySet('');
    return res.call({date, period}, 'model', options) as Observable<ReportModel<Report>>;
  }
  public getEmailAppUsageAppsUserCounts(period: string, options?: HttpOptions): Observable<ReportModel<Report>> {
    var res = this._function<{period: string}, Report>('microsoft.graph.getEmailAppUsageAppsUserCounts');
    res.segment.entitySet('');
    return res.call({period}, 'model', options) as Observable<ReportModel<Report>>;
  }
  public getEmailAppUsageUserCounts(period: string, options?: HttpOptions): Observable<ReportModel<Report>> {
    var res = this._function<{period: string}, Report>('microsoft.graph.getEmailAppUsageUserCounts');
    res.segment.entitySet('');
    return res.call({period}, 'model', options) as Observable<ReportModel<Report>>;
  }
  public getEmailAppUsageUserDetail(date?: Date, period?: string, options?: HttpOptions): Observable<ReportModel<Report>> {
    var res = this._function<{date?: Date, period?: string}, Report>('microsoft.graph.getEmailAppUsageUserDetail');
    res.segment.entitySet('');
    return res.call({date, period}, 'model', options) as Observable<ReportModel<Report>>;
  }
  public getEmailAppUsageVersionsUserCounts(period: string, options?: HttpOptions): Observable<ReportModel<Report>> {
    var res = this._function<{period: string}, Report>('microsoft.graph.getEmailAppUsageVersionsUserCounts');
    res.segment.entitySet('');
    return res.call({period}, 'model', options) as Observable<ReportModel<Report>>;
  }
  public getMailboxUsageDetail(period: string, options?: HttpOptions): Observable<ReportModel<Report>> {
    var res = this._function<{period: string}, Report>('microsoft.graph.getMailboxUsageDetail');
    res.segment.entitySet('');
    return res.call({period}, 'model', options) as Observable<ReportModel<Report>>;
  }
  public getMailboxUsageMailboxCounts(period: string, options?: HttpOptions): Observable<ReportModel<Report>> {
    var res = this._function<{period: string}, Report>('microsoft.graph.getMailboxUsageMailboxCounts');
    res.segment.entitySet('');
    return res.call({period}, 'model', options) as Observable<ReportModel<Report>>;
  }
  public getMailboxUsageQuotaStatusMailboxCounts(period: string, options?: HttpOptions): Observable<ReportModel<Report>> {
    var res = this._function<{period: string}, Report>('microsoft.graph.getMailboxUsageQuotaStatusMailboxCounts');
    res.segment.entitySet('');
    return res.call({period}, 'model', options) as Observable<ReportModel<Report>>;
  }
  public getMailboxUsageStorage(period: string, options?: HttpOptions): Observable<ReportModel<Report>> {
    var res = this._function<{period: string}, Report>('microsoft.graph.getMailboxUsageStorage');
    res.segment.entitySet('');
    return res.call({period}, 'model', options) as Observable<ReportModel<Report>>;
  }
  public getOffice365ActivationCounts(options?: HttpOptions): Observable<ReportModel<Report>> {
    var res = this._function<null, Report>('microsoft.graph.getOffice365ActivationCounts');
    res.segment.entitySet('');
    return res.call(null, 'model', options) as Observable<ReportModel<Report>>;
  }
  public getOffice365ActivationsUserCounts(options?: HttpOptions): Observable<ReportModel<Report>> {
    var res = this._function<null, Report>('microsoft.graph.getOffice365ActivationsUserCounts');
    res.segment.entitySet('');
    return res.call(null, 'model', options) as Observable<ReportModel<Report>>;
  }
  public getOffice365ActivationsUserDetail(options?: HttpOptions): Observable<ReportModel<Report>> {
    var res = this._function<null, Report>('microsoft.graph.getOffice365ActivationsUserDetail');
    res.segment.entitySet('');
    return res.call(null, 'model', options) as Observable<ReportModel<Report>>;
  }
  public getOffice365ActiveUserCounts(period: string, options?: HttpOptions): Observable<ReportModel<Report>> {
    var res = this._function<{period: string}, Report>('microsoft.graph.getOffice365ActiveUserCounts');
    res.segment.entitySet('');
    return res.call({period}, 'model', options) as Observable<ReportModel<Report>>;
  }
  public getOffice365ActiveUserDetail(date?: Date, period?: string, options?: HttpOptions): Observable<ReportModel<Report>> {
    var res = this._function<{date?: Date, period?: string}, Report>('microsoft.graph.getOffice365ActiveUserDetail');
    res.segment.entitySet('');
    return res.call({date, period}, 'model', options) as Observable<ReportModel<Report>>;
  }
  public getOffice365GroupsActivityCounts(period: string, options?: HttpOptions): Observable<ReportModel<Report>> {
    var res = this._function<{period: string}, Report>('microsoft.graph.getOffice365GroupsActivityCounts');
    res.segment.entitySet('');
    return res.call({period}, 'model', options) as Observable<ReportModel<Report>>;
  }
  public getOffice365GroupsActivityDetail(date?: Date, period?: string, options?: HttpOptions): Observable<ReportModel<Report>> {
    var res = this._function<{date?: Date, period?: string}, Report>('microsoft.graph.getOffice365GroupsActivityDetail');
    res.segment.entitySet('');
    return res.call({date, period}, 'model', options) as Observable<ReportModel<Report>>;
  }
  public getOffice365GroupsActivityFileCounts(period: string, options?: HttpOptions): Observable<ReportModel<Report>> {
    var res = this._function<{period: string}, Report>('microsoft.graph.getOffice365GroupsActivityFileCounts');
    res.segment.entitySet('');
    return res.call({period}, 'model', options) as Observable<ReportModel<Report>>;
  }
  public getOffice365GroupsActivityGroupCounts(period: string, options?: HttpOptions): Observable<ReportModel<Report>> {
    var res = this._function<{period: string}, Report>('microsoft.graph.getOffice365GroupsActivityGroupCounts');
    res.segment.entitySet('');
    return res.call({period}, 'model', options) as Observable<ReportModel<Report>>;
  }
  public getOffice365GroupsActivityStorage(period: string, options?: HttpOptions): Observable<ReportModel<Report>> {
    var res = this._function<{period: string}, Report>('microsoft.graph.getOffice365GroupsActivityStorage');
    res.segment.entitySet('');
    return res.call({period}, 'model', options) as Observable<ReportModel<Report>>;
  }
  public getOffice365ServicesUserCounts(period: string, options?: HttpOptions): Observable<ReportModel<Report>> {
    var res = this._function<{period: string}, Report>('microsoft.graph.getOffice365ServicesUserCounts');
    res.segment.entitySet('');
    return res.call({period}, 'model', options) as Observable<ReportModel<Report>>;
  }
  public getOneDriveActivityFileCounts(period: string, options?: HttpOptions): Observable<ReportModel<Report>> {
    var res = this._function<{period: string}, Report>('microsoft.graph.getOneDriveActivityFileCounts');
    res.segment.entitySet('');
    return res.call({period}, 'model', options) as Observable<ReportModel<Report>>;
  }
  public getOneDriveActivityUserCounts(period: string, options?: HttpOptions): Observable<ReportModel<Report>> {
    var res = this._function<{period: string}, Report>('microsoft.graph.getOneDriveActivityUserCounts');
    res.segment.entitySet('');
    return res.call({period}, 'model', options) as Observable<ReportModel<Report>>;
  }
  public getOneDriveActivityUserDetail(date?: Date, period?: string, options?: HttpOptions): Observable<ReportModel<Report>> {
    var res = this._function<{date?: Date, period?: string}, Report>('microsoft.graph.getOneDriveActivityUserDetail');
    res.segment.entitySet('');
    return res.call({date, period}, 'model', options) as Observable<ReportModel<Report>>;
  }
  public getOneDriveUsageAccountCounts(period: string, options?: HttpOptions): Observable<ReportModel<Report>> {
    var res = this._function<{period: string}, Report>('microsoft.graph.getOneDriveUsageAccountCounts');
    res.segment.entitySet('');
    return res.call({period}, 'model', options) as Observable<ReportModel<Report>>;
  }
  public getOneDriveUsageAccountDetail(date?: Date, period?: string, options?: HttpOptions): Observable<ReportModel<Report>> {
    var res = this._function<{date?: Date, period?: string}, Report>('microsoft.graph.getOneDriveUsageAccountDetail');
    res.segment.entitySet('');
    return res.call({date, period}, 'model', options) as Observable<ReportModel<Report>>;
  }
  public getOneDriveUsageFileCounts(period: string, options?: HttpOptions): Observable<ReportModel<Report>> {
    var res = this._function<{period: string}, Report>('microsoft.graph.getOneDriveUsageFileCounts');
    res.segment.entitySet('');
    return res.call({period}, 'model', options) as Observable<ReportModel<Report>>;
  }
  public getOneDriveUsageStorage(period: string, options?: HttpOptions): Observable<ReportModel<Report>> {
    var res = this._function<{period: string}, Report>('microsoft.graph.getOneDriveUsageStorage');
    res.segment.entitySet('');
    return res.call({period}, 'model', options) as Observable<ReportModel<Report>>;
  }
  public getSharePointActivityFileCounts(period: string, options?: HttpOptions): Observable<ReportModel<Report>> {
    var res = this._function<{period: string}, Report>('microsoft.graph.getSharePointActivityFileCounts');
    res.segment.entitySet('');
    return res.call({period}, 'model', options) as Observable<ReportModel<Report>>;
  }
  public getSharePointActivityPages(period: string, options?: HttpOptions): Observable<ReportModel<Report>> {
    var res = this._function<{period: string}, Report>('microsoft.graph.getSharePointActivityPages');
    res.segment.entitySet('');
    return res.call({period}, 'model', options) as Observable<ReportModel<Report>>;
  }
  public getSharePointActivityUserCounts(period: string, options?: HttpOptions): Observable<ReportModel<Report>> {
    var res = this._function<{period: string}, Report>('microsoft.graph.getSharePointActivityUserCounts');
    res.segment.entitySet('');
    return res.call({period}, 'model', options) as Observable<ReportModel<Report>>;
  }
  public getSharePointActivityUserDetail(date?: Date, period?: string, options?: HttpOptions): Observable<ReportModel<Report>> {
    var res = this._function<{date?: Date, period?: string}, Report>('microsoft.graph.getSharePointActivityUserDetail');
    res.segment.entitySet('');
    return res.call({date, period}, 'model', options) as Observable<ReportModel<Report>>;
  }
  public getSharePointSiteUsageDetail(date?: Date, period?: string, options?: HttpOptions): Observable<ReportModel<Report>> {
    var res = this._function<{date?: Date, period?: string}, Report>('microsoft.graph.getSharePointSiteUsageDetail');
    res.segment.entitySet('');
    return res.call({date, period}, 'model', options) as Observable<ReportModel<Report>>;
  }
  public getSharePointSiteUsageFileCounts(period: string, options?: HttpOptions): Observable<ReportModel<Report>> {
    var res = this._function<{period: string}, Report>('microsoft.graph.getSharePointSiteUsageFileCounts');
    res.segment.entitySet('');
    return res.call({period}, 'model', options) as Observable<ReportModel<Report>>;
  }
  public getSharePointSiteUsagePages(period: string, options?: HttpOptions): Observable<ReportModel<Report>> {
    var res = this._function<{period: string}, Report>('microsoft.graph.getSharePointSiteUsagePages');
    res.segment.entitySet('');
    return res.call({period}, 'model', options) as Observable<ReportModel<Report>>;
  }
  public getSharePointSiteUsageSiteCounts(period: string, options?: HttpOptions): Observable<ReportModel<Report>> {
    var res = this._function<{period: string}, Report>('microsoft.graph.getSharePointSiteUsageSiteCounts');
    res.segment.entitySet('');
    return res.call({period}, 'model', options) as Observable<ReportModel<Report>>;
  }
  public getSharePointSiteUsageStorage(period: string, options?: HttpOptions): Observable<ReportModel<Report>> {
    var res = this._function<{period: string}, Report>('microsoft.graph.getSharePointSiteUsageStorage');
    res.segment.entitySet('');
    return res.call({period}, 'model', options) as Observable<ReportModel<Report>>;
  }
  public getSkypeForBusinessActivityCounts(period: string, options?: HttpOptions): Observable<ReportModel<Report>> {
    var res = this._function<{period: string}, Report>('microsoft.graph.getSkypeForBusinessActivityCounts');
    res.segment.entitySet('');
    return res.call({period}, 'model', options) as Observable<ReportModel<Report>>;
  }
  public getSkypeForBusinessActivityUserCounts(period: string, options?: HttpOptions): Observable<ReportModel<Report>> {
    var res = this._function<{period: string}, Report>('microsoft.graph.getSkypeForBusinessActivityUserCounts');
    res.segment.entitySet('');
    return res.call({period}, 'model', options) as Observable<ReportModel<Report>>;
  }
  public getSkypeForBusinessActivityUserDetail(date?: Date, period?: string, options?: HttpOptions): Observable<ReportModel<Report>> {
    var res = this._function<{date?: Date, period?: string}, Report>('microsoft.graph.getSkypeForBusinessActivityUserDetail');
    res.segment.entitySet('');
    return res.call({date, period}, 'model', options) as Observable<ReportModel<Report>>;
  }
  public getSkypeForBusinessDeviceUsageDistributionUserCounts(period: string, options?: HttpOptions): Observable<ReportModel<Report>> {
    var res = this._function<{period: string}, Report>('microsoft.graph.getSkypeForBusinessDeviceUsageDistributionUserCounts');
    res.segment.entitySet('');
    return res.call({period}, 'model', options) as Observable<ReportModel<Report>>;
  }
  public getSkypeForBusinessDeviceUsageUserCounts(period: string, options?: HttpOptions): Observable<ReportModel<Report>> {
    var res = this._function<{period: string}, Report>('microsoft.graph.getSkypeForBusinessDeviceUsageUserCounts');
    res.segment.entitySet('');
    return res.call({period}, 'model', options) as Observable<ReportModel<Report>>;
  }
  public getSkypeForBusinessDeviceUsageUserDetail(date?: Date, period?: string, options?: HttpOptions): Observable<ReportModel<Report>> {
    var res = this._function<{date?: Date, period?: string}, Report>('microsoft.graph.getSkypeForBusinessDeviceUsageUserDetail');
    res.segment.entitySet('');
    return res.call({date, period}, 'model', options) as Observable<ReportModel<Report>>;
  }
  public getSkypeForBusinessOrganizerActivityCounts(period: string, options?: HttpOptions): Observable<ReportModel<Report>> {
    var res = this._function<{period: string}, Report>('microsoft.graph.getSkypeForBusinessOrganizerActivityCounts');
    res.segment.entitySet('');
    return res.call({period}, 'model', options) as Observable<ReportModel<Report>>;
  }
  public getSkypeForBusinessOrganizerActivityMinuteCounts(period: string, options?: HttpOptions): Observable<ReportModel<Report>> {
    var res = this._function<{period: string}, Report>('microsoft.graph.getSkypeForBusinessOrganizerActivityMinuteCounts');
    res.segment.entitySet('');
    return res.call({period}, 'model', options) as Observable<ReportModel<Report>>;
  }
  public getSkypeForBusinessOrganizerActivityUserCounts(period: string, options?: HttpOptions): Observable<ReportModel<Report>> {
    var res = this._function<{period: string}, Report>('microsoft.graph.getSkypeForBusinessOrganizerActivityUserCounts');
    res.segment.entitySet('');
    return res.call({period}, 'model', options) as Observable<ReportModel<Report>>;
  }
  public getSkypeForBusinessParticipantActivityCounts(period: string, options?: HttpOptions): Observable<ReportModel<Report>> {
    var res = this._function<{period: string}, Report>('microsoft.graph.getSkypeForBusinessParticipantActivityCounts');
    res.segment.entitySet('');
    return res.call({period}, 'model', options) as Observable<ReportModel<Report>>;
  }
  public getSkypeForBusinessParticipantActivityMinuteCounts(period: string, options?: HttpOptions): Observable<ReportModel<Report>> {
    var res = this._function<{period: string}, Report>('microsoft.graph.getSkypeForBusinessParticipantActivityMinuteCounts');
    res.segment.entitySet('');
    return res.call({period}, 'model', options) as Observable<ReportModel<Report>>;
  }
  public getSkypeForBusinessParticipantActivityUserCounts(period: string, options?: HttpOptions): Observable<ReportModel<Report>> {
    var res = this._function<{period: string}, Report>('microsoft.graph.getSkypeForBusinessParticipantActivityUserCounts');
    res.segment.entitySet('');
    return res.call({period}, 'model', options) as Observable<ReportModel<Report>>;
  }
  public getSkypeForBusinessPeerToPeerActivityCounts(period: string, options?: HttpOptions): Observable<ReportModel<Report>> {
    var res = this._function<{period: string}, Report>('microsoft.graph.getSkypeForBusinessPeerToPeerActivityCounts');
    res.segment.entitySet('');
    return res.call({period}, 'model', options) as Observable<ReportModel<Report>>;
  }
  public getSkypeForBusinessPeerToPeerActivityMinuteCounts(period: string, options?: HttpOptions): Observable<ReportModel<Report>> {
    var res = this._function<{period: string}, Report>('microsoft.graph.getSkypeForBusinessPeerToPeerActivityMinuteCounts');
    res.segment.entitySet('');
    return res.call({period}, 'model', options) as Observable<ReportModel<Report>>;
  }
  public getSkypeForBusinessPeerToPeerActivityUserCounts(period: string, options?: HttpOptions): Observable<ReportModel<Report>> {
    var res = this._function<{period: string}, Report>('microsoft.graph.getSkypeForBusinessPeerToPeerActivityUserCounts');
    res.segment.entitySet('');
    return res.call({period}, 'model', options) as Observable<ReportModel<Report>>;
  }
  public getYammerActivityCounts(period: string, options?: HttpOptions): Observable<ReportModel<Report>> {
    var res = this._function<{period: string}, Report>('microsoft.graph.getYammerActivityCounts');
    res.segment.entitySet('');
    return res.call({period}, 'model', options) as Observable<ReportModel<Report>>;
  }
  public getYammerActivityUserCounts(period: string, options?: HttpOptions): Observable<ReportModel<Report>> {
    var res = this._function<{period: string}, Report>('microsoft.graph.getYammerActivityUserCounts');
    res.segment.entitySet('');
    return res.call({period}, 'model', options) as Observable<ReportModel<Report>>;
  }
  public getYammerActivityUserDetail(date?: Date, period?: string, options?: HttpOptions): Observable<ReportModel<Report>> {
    var res = this._function<{date?: Date, period?: string}, Report>('microsoft.graph.getYammerActivityUserDetail');
    res.segment.entitySet('');
    return res.call({date, period}, 'model', options) as Observable<ReportModel<Report>>;
  }
  public getYammerDeviceUsageDistributionUserCounts(period: string, options?: HttpOptions): Observable<ReportModel<Report>> {
    var res = this._function<{period: string}, Report>('microsoft.graph.getYammerDeviceUsageDistributionUserCounts');
    res.segment.entitySet('');
    return res.call({period}, 'model', options) as Observable<ReportModel<Report>>;
  }
  public getYammerDeviceUsageUserCounts(period: string, options?: HttpOptions): Observable<ReportModel<Report>> {
    var res = this._function<{period: string}, Report>('microsoft.graph.getYammerDeviceUsageUserCounts');
    res.segment.entitySet('');
    return res.call({period}, 'model', options) as Observable<ReportModel<Report>>;
  }
  public getYammerDeviceUsageUserDetail(date?: Date, period?: string, options?: HttpOptions): Observable<ReportModel<Report>> {
    var res = this._function<{date?: Date, period?: string}, Report>('microsoft.graph.getYammerDeviceUsageUserDetail');
    res.segment.entitySet('');
    return res.call({date, period}, 'model', options) as Observable<ReportModel<Report>>;
  }
  public getYammerGroupsActivityCounts(period: string, options?: HttpOptions): Observable<ReportModel<Report>> {
    var res = this._function<{period: string}, Report>('microsoft.graph.getYammerGroupsActivityCounts');
    res.segment.entitySet('');
    return res.call({period}, 'model', options) as Observable<ReportModel<Report>>;
  }
  public getYammerGroupsActivityDetail(date?: Date, period?: string, options?: HttpOptions): Observable<ReportModel<Report>> {
    var res = this._function<{date?: Date, period?: string}, Report>('microsoft.graph.getYammerGroupsActivityDetail');
    res.segment.entitySet('');
    return res.call({date, period}, 'model', options) as Observable<ReportModel<Report>>;
  }
  public getYammerGroupsActivityGroupCounts(period: string, options?: HttpOptions): Observable<ReportModel<Report>> {
    var res = this._function<{period: string}, Report>('microsoft.graph.getYammerGroupsActivityGroupCounts');
    res.segment.entitySet('');
    return res.call({period}, 'model', options) as Observable<ReportModel<Report>>;
  }
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}