import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DirectoryObjectModel } from './directoryobject.model';
import { ExtensionProperty } from './extensionproperty.entity';
import { ExtensionPropertyCollection } from './extensionproperty.collection';
//#endregion

export class ExtensionPropertyModel<E extends ExtensionProperty> extends DirectoryObjectModel<E> {
  //#region ODataApi Properties
  appDisplayName?: string;
  dataType: string;
  isSyncedFromOnPremises?: boolean;
  name: string;
  targetObjects: string[];
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}