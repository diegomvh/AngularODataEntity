import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { PadronLocalidad } from './padronlocalidad.entity';
import { PadronDepartamento } from './padrondepartamento.entity';
import { PadronLocalidadModel } from './padronlocalidad.model';
import { PadronLocalidadCollection } from './padronlocalidad.collection';
import { PadronDepartamentoCollection } from './padrondepartamento.collection';
//#endregion

export class PadronDepartamentoModel<E extends PadronDepartamento> extends ODataModel<E> {
  //#region ODataApi Properties
  nombre: string;
  id: number;
  rev?: ArrayBuffer;
  key?: string;
  type?: string;
  shortname?: string;
  name?: string;
  longname?: string;
  localidades?: PadronLocalidadCollection<PadronLocalidad, PadronLocalidadModel<PadronLocalidad>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}