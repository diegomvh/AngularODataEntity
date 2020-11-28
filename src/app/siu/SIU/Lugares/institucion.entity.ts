import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Localidad } from './localidad.entity';
import { Intervencion } from '../Tramites/intervencion.entity';
import { LocalidadModel } from './localidad.model';
import { IntervencionModel } from '../Tramites/intervencion.model';
import { LocalidadCollection } from './localidad.collection';
import { IntervencionCollection } from '../Tramites/intervencion.collection';
//#endregion

export interface Institucion {
  //#region ODataApi Properties
  guid?: string;
  localidadId?: number;
  nombre?: string;
  direccion?: string;
  telefono?: string;
  id: number;
  rev?: ArrayBuffer;
  key?: string;
  type?: string;
  shortname?: string;
  name?: string;
  longname?: string;
  intervenciones?: Intervencion[];
  localidad?: Localidad;
  //#endregion
}