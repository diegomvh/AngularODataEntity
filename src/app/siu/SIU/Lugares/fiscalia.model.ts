import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Fiscalia } from './fiscalia.entity';
import { Localidad } from './localidad.entity';
import { LocalidadModel } from './localidad.model';
import { FiscaliaCollection } from './fiscalia.collection';
import { LocalidadCollection } from './localidad.collection';
//#endregion

export class FiscaliaModel<E extends Fiscalia> extends ODataModel<E> {
  //#region ODataApi Properties
  abreviado?: string;
  nombre?: string;
  localidadId?: number;
  guid: string;
  shortname?: string;
  id: number;
  rev?: ArrayBuffer;
  key?: string;
  type?: string;
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