import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { MovimientoCaso } from './movimientocaso.entity';
import { MovimientoCasoModel } from './movimientocaso.model';
import { MovimientoCasoCollection } from './movimientocaso.collection';
//#endregion

export interface EstadoRequirenteCaso {
  //#region ODataApi Properties
  nombre: string;
  descVen1?: string;
  plazoVen1?: string;
  descVen2?: string;
  plazoVen2?: string;
  suspPlazo: boolean;
  esRebeldia: boolean;
  esOrdenDetencion: boolean;
  esOrdenCaptura: boolean;
  id: number;
  rev?: ArrayBuffer;
  key?: string;
  type?: string;
  shortname?: string;
  name?: string;
  longname?: string;
  movimientoCasos?: MovimientoCaso[];
  //#endregion
}