import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { LugarDetencion } from './lugardetencion.entity';
import { Localidad } from './localidad.entity';
import { LocalidadModel } from './localidad.model';
import { LugarDetencionCollection } from './lugardetencion.collection';
import { LocalidadCollection } from './localidad.collection';
//#endregion

export class LugarDetencionModel<E extends LugarDetencion> extends ODataModel<E> {
  //#region ODataApi Properties
  nombre: string;
  localidadId?: number;
  guid: string;
  id: number;
  rev?: ArrayBuffer;
  key?: string;
  type?: string;
  shortname?: string;
  name?: string;
  longname?: string;
  localidad?: LocalidadModel<Localidad>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}