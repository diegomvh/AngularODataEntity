import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { PolicyBaseCollection } from './policybase.collection';
import { DirectoryObject } from './directoryobject.entity';
import { StsPolicy } from './stspolicy.entity';
import { DirectoryObjectModel } from './directoryobject.model';
import { StsPolicyModel } from './stspolicy.model';
import { DirectoryObjectCollection } from './directoryobject.collection';
//#endregion

export class StsPolicyCollection<E extends StsPolicy, M extends StsPolicyModel<E>> extends PolicyBaseCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}