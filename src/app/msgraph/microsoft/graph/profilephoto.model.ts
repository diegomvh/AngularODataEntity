import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { ProfilePhoto } from './profilephoto.entity';
import { ProfilePhotoCollection } from './profilephoto.collection';
//#endregion

export class ProfilePhotoModel<E extends ProfilePhoto> extends EntityModel<E> {
  //#region ODataApi Properties
  height?: number;
  width?: number;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}