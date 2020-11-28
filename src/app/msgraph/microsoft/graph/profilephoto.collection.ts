import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { ProfilePhoto } from './profilephoto.entity';
import { ProfilePhotoModel } from './profilephoto.model';
//#endregion

export class ProfilePhotoCollection<E extends ProfilePhoto, M extends ProfilePhotoModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}