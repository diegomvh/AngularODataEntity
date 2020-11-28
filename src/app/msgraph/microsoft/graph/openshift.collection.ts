import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ChangeTrackedEntityCollection } from './changetrackedentity.collection';
import { OpenShiftItem } from './openshiftitem.entity';
import { OpenShift } from './openshift.entity';
import { OpenShiftItemModel } from './openshiftitem.model';
import { OpenShiftModel } from './openshift.model';
import { OpenShiftItemCollection } from './openshiftitem.collection';
//#endregion

export class OpenShiftCollection<E extends OpenShift, M extends OpenShiftModel<E>> extends ChangeTrackedEntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}