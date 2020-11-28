import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Padron } from './padron.entity';
import { PadronLocalidad } from './padronlocalidad.entity';
import { PadronDepartamento } from './padrondepartamento.entity';
import { PadronModel } from './padron.model';
import { PadronDepartamentoModel } from './padrondepartamento.model';
import { PadronCollection } from './padron.collection';
import { PadronLocalidadCollection } from './padronlocalidad.collection';
import { PadronDepartamentoCollection } from './padrondepartamento.collection';
//#endregion

export class PadronLocalidadModel<E extends PadronLocalidad> extends ODataModel<E> {
  //#region ODataApi Properties
  departamentoId: number;
  nombre: string;
  id: number;
  rev?: ArrayBuffer;
  key?: string;
  type?: string;
  shortname?: string;
  name?: string;
  longname?: string;
  padrones?: PadronCollection<Padron, PadronModel<Padron>>;
  departamento?: PadronDepartamentoModel<PadronDepartamento>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}