import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Localidad } from './localidad.entity';
import { Provincia } from './provincia.entity';
import { LocalidadModel } from './localidad.model';
import { LocalidadCollection } from './localidad.collection';
import { ProvinciaCollection } from './provincia.collection';
//#endregion

export class ProvinciaModel<E extends Provincia> extends ODataModel<E> {
  //#region ODataApi Properties
  nombre: string;
  oculto: boolean;
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