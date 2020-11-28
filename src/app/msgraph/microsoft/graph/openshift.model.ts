import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ChangeTrackedEntityModel } from './changetrackedentity.model';
import { OpenShiftItem } from './openshiftitem.complex';
import { OpenShift } from './openshift.entity';
import { OpenShiftItemModel } from './openshiftitem.model';
import { OpenShiftItemCollection } from './openshiftitem.collection';
import { OpenShiftCollection } from './openshift.collection';
//#endregion

export class OpenShiftModel<E extends OpenShift> extends ChangeTrackedEntityModel<E> {
  //#region ODataApi Properties
  draftOpenShift?: OpenShiftItemModel<OpenShiftItem>;
  schedulingGroupId?: string;
  sharedOpenShift?: OpenShiftItemModel<OpenShiftItem>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}