import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { DirectoryObject } from './directoryobject.entity';
import { ExtensionProperty } from './extensionproperty.entity';
import { DirectoryObjectModel } from './directoryobject.model';
import { ExtensionPropertyModel } from './extensionproperty.model';
import { ExtensionPropertyCollection } from './extensionproperty.collection';
//#endregion

export class DirectoryObjectCollection<E extends DirectoryObject, M extends DirectoryObjectModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  public validateProperties(entityType: string, displayName: string, mailNickname: string, onBehalfOfUserId: string, options?: HttpOptions): Observable<any> {
    var res = this._action<{entityType: string, displayName: string, mailNickname: string, onBehalfOfUserId: string}, any>('microsoft.graph.validateProperties');
    res.segment.entitySet('directoryObjects');
    return res.call({entityType, displayName, mailNickname, onBehalfOfUserId}, 'property', options) as Observable<any>;
  }
  public getAvailableExtensionProperties(isSyncedFromOnPremises: boolean, options?: HttpOptions): Observable<ExtensionPropertyCollection<ExtensionProperty, ExtensionPropertyModel<ExtensionProperty>>> {
    var res = this._action<{isSyncedFromOnPremises: boolean}, ExtensionProperty>('microsoft.graph.getAvailableExtensionProperties');
    res.segment.entitySet('directoryObjects');
    return res.call({isSyncedFromOnPremises}, 'collection', options) as Observable<ExtensionPropertyCollection<ExtensionProperty, ExtensionPropertyModel<ExtensionProperty>>>;
  }
  public getByIds(ids: string[], types: string[], options?: HttpOptions): Observable<DirectoryObjectCollection<DirectoryObject, DirectoryObjectModel<DirectoryObject>>> {
    var res = this._action<{ids: string[], types: string[]}, DirectoryObject>('microsoft.graph.getByIds');
    res.segment.entitySet('directoryObjects');
    return res.call({ids, types}, 'collection', options) as Observable<DirectoryObjectCollection<DirectoryObject, DirectoryObjectModel<DirectoryObject>>>;
  }
  //#endregion
  //#region ODataApi Functions
  //#endregion
}