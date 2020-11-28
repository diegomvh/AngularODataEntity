import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Circunscripcion } from './circunscripcion.entity';
import { Localidad } from './localidad.entity';
import { LocalidadModel } from './localidad.model';
import { CircunscripcionCollection } from './circunscripcion.collection';
import { LocalidadCollection } from './localidad.collection';
//#endregion

export class CircunscripcionModel<E extends Circunscripcion> extends ODataModel<E> {
  //#region ODataApi Properties
  nombre?: string;
  id: number;
  rev?: ArrayBuffer;
  key?: string;
  type?: string;
  shortname?: string;
  name?: string;
  longname?: string;
  localidades?: LocalidadCollection<Localidad, LocalidadModel<Localidad>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}