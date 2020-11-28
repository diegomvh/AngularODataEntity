import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DirectoryObjectCollection } from './directoryobject.collection';
import { DirectoryObject } from './directoryobject.entity';
import { ScopedRoleMembership } from './scopedrolemembership.entity';
import { DirectoryRole } from './directoryrole.entity';
import { DirectoryObjectModel } from './directoryobject.model';
import { ScopedRoleMembershipModel } from './scopedrolemembership.model';
import { DirectoryRoleModel } from './directoryrole.model';
import { ScopedRoleMembershipCollection } from './scopedrolemembership.collection';
//#endregion

export class DirectoryRoleCollection<E extends DirectoryRole, M extends DirectoryRoleModel<E>> extends DirectoryObjectCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  public delta(options?: HttpOptions): Observable<DirectoryRoleCollection<DirectoryRole, DirectoryRoleModel<DirectoryRole>>> {
    var res = this._function<null, DirectoryRole>('microsoft.graph.delta');
    res.segment.entitySet('directoryRoles');
    return res.call(null, 'collection', options) as Observable<DirectoryRoleCollection<DirectoryRole, DirectoryRoleModel<DirectoryRole>>>;
  }
  //#endregion
}