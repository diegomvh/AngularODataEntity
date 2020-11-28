import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DirectoryObjectCollection } from './directoryobject.collection';
import { ExtensionProperty } from './extensionproperty.entity';
import { ExtensionPropertyModel } from './extensionproperty.model';
//#endregion

export class ExtensionPropertyCollection<E extends ExtensionProperty, M extends ExtensionPropertyModel<E>> extends DirectoryObjectCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}