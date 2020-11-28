import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { DirectoryObject } from './directoryobject.entity';
import { ExtensionProperty } from './extensionproperty.entity';
import { ExtensionPropertyModel } from './extensionproperty.model';
import { DirectoryObjectCollection } from './directoryobject.collection';
import { ExtensionPropertyCollection } from './extensionproperty.collection';
//#endregion

export class DirectoryObjectModel<E extends DirectoryObject> extends EntityModel<E> {
  //#region ODataApi Properties
  deletedDateTime?: Date;
  //#endregion
  //#region ODataApi Actions
  public checkMemberGroups(groupIds: string[], options?: HttpOptions): Observable<string> {
    var res = this._action<{groupIds: string[]}, string>('microsoft.graph.checkMemberGroups');
    res.segment.entitySet('directoryObjects');
    return res.call({groupIds}, 'property', options) as Observable<string>;
  }
  public checkMemberObjects(ids: string[], options?: HttpOptions): Observable<string> {
    var res = this._action<{ids: string[]}, string>('microsoft.graph.checkMemberObjects');
    res.segment.entitySet('directoryObjects');
    return res.call({ids}, 'property', options) as Observable<string>;
  }
  public getMemberGroups(securityEnabledOnly: boolean, options?: HttpOptions): Observable<string> {
    var res = this._action<{securityEnabledOnly: boolean}, string>('microsoft.graph.getMemberGroups');
    res.segment.entitySet('directoryObjects');
    return res.call({securityEnabledOnly}, 'property', options) as Observable<string>;
  }
  public getMemberObjects(securityEnabledOnly: boolean, options?: HttpOptions): Observable<string> {
    var res = this._action<{securityEnabledOnly: boolean}, string>('microsoft.graph.getMemberObjects');
    res.segment.entitySet('directoryObjects');
    return res.call({securityEnabledOnly}, 'property', options) as Observable<string>;
  }
  public restore(options?: HttpOptions): Observable<DirectoryObjectModel<DirectoryObject>> {
    var res = this._action<null, DirectoryObject>('microsoft.graph.restore');
    res.segment.entitySet('directoryObjects');
    return res.call(null, 'model', options) as Observable<DirectoryObjectModel<DirectoryObject>>;
  }
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}