import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { PolicyBaseModel } from './policybase.model';
import { DirectoryObject } from './directoryobject.entity';
import { StsPolicy } from './stspolicy.entity';
import { DirectoryObjectModel } from './directoryobject.model';
import { DirectoryObjectCollection } from './directoryobject.collection';
import { StsPolicyCollection } from './stspolicy.collection';
//#endregion

export class StsPolicyModel<E extends StsPolicy> extends PolicyBaseModel<E> {
  //#region ODataApi Properties
  definition: string[];
  isOrganizationDefault?: boolean;
  appliesTo?: DirectoryObjectCollection<DirectoryObject, DirectoryObjectModel<DirectoryObject>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}