import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Padron } from './padron.entity';
import { PadronLocalidad } from './padronlocalidad.entity';
import { PadronLocalidadModel } from './padronlocalidad.model';
import { PadronCollection } from './padron.collection';
import { PadronLocalidadCollection } from './padronlocalidad.collection';
//#endregion

export class PadronModel<E extends Padron> extends ODataModel<E> {
  //#region ODataApi Properties
  localidadPadronId: number;
  documento?: string;
  clase?: number;
  nombre?: string;
  ocupacion?: string;
  direccion?: string;
  tipoDoc?: string;
  sexo?: string;
  id: number;
  rev?: ArrayBuffer;
  key?: string;
  type?: string;
  shortname?: string;
  name?: string;
  longname?: string;
  localidad?: PadronLocalidadModel<PadronLocalidad>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}