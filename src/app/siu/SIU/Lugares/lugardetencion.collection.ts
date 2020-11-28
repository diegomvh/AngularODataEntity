import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { LugarDetencion } from './lugardetencion.entity';
import { Localidad } from './localidad.entity';
import { LugarDetencionModel } from './lugardetencion.model';
import { LocalidadModel } from './localidad.model';
import { LocalidadCollection } from './localidad.collection';
//#endregion

export class LugarDetencionCollection<E extends LugarDetencion, M extends LugarDetencionModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}