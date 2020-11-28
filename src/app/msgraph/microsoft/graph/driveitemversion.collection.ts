import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { BaseItemVersionCollection } from './baseitemversion.collection';
import { DriveItemVersion } from './driveitemversion.entity';
import { DriveItemVersionModel } from './driveitemversion.model';
//#endregion

export class DriveItemVersionCollection<E extends DriveItemVersion, M extends DriveItemVersionModel<E>> extends BaseItemVersionCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}