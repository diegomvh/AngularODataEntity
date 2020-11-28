import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DirectoryObjectCollection } from './directoryobject.collection';
import { DirectoryObject } from './directoryobject.entity';
import { ScopedRoleMembership } from './scopedrolemembership.entity';
import { Extension } from './extension.entity';
import { AdministrativeUnit } from './administrativeunit.entity';
import { DirectoryObjectModel } from './directoryobject.model';
import { ScopedRoleMembershipModel } from './scopedrolemembership.model';
import { ExtensionModel } from './extension.model';
import { AdministrativeUnitModel } from './administrativeunit.model';
import { ScopedRoleMembershipCollection } from './scopedrolemembership.collection';
import { ExtensionCollection } from './extension.collection';
//#endregion

export class AdministrativeUnitCollection<E extends AdministrativeUnit, M extends AdministrativeUnitModel<E>> extends DirectoryObjectCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  public delta(options?: HttpOptions): Observable<AdministrativeUnitCollection<AdministrativeUnit, AdministrativeUnitModel<AdministrativeUnit>>> {
    var res = this._function<null, AdministrativeUnit>('microsoft.graph.delta');
    res.segment.entitySet('');
    return res.call(null, 'collection', options) as Observable<AdministrativeUnitCollection<AdministrativeUnit, AdministrativeUnitModel<AdministrativeUnit>>>;
  }
  //#endregion
}