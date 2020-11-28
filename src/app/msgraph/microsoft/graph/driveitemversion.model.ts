import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { BaseItemVersionModel } from './baseitemversion.model';
import { DriveItemVersion } from './driveitemversion.entity';
import { DriveItemVersionCollection } from './driveitemversion.collection';
//#endregion

export class DriveItemVersionModel<E extends DriveItemVersion> extends BaseItemVersionModel<E> {
  //#region ODataApi Properties
  content?: any;
  size?: number;
  //#endregion
  //#region ODataApi Actions
  public restoreVersion(options?: HttpOptions): Observable<any> {
    var res = this._action<null, any>('microsoft.graph.restoreVersion');
    res.segment.entitySet('');
    return res.call(null, 'property', options) as Observable<any>;
  }
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}