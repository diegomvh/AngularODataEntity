import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { RequirenteCaso } from './requirentecaso.entity';
import { RequirenteNotaAvenimiento } from './requirentenotaavenimiento.entity';
import { RequirenteAvenimiento } from './requirenteavenimiento.entity';
import { RequirenteCitacion } from './requirentecitacion.entity';
import { RequirenteCasoModel } from './requirentecaso.model';
import { RequirenteNotaAvenimientoModel } from './requirentenotaavenimiento.model';
import { RequirenteAvenimientoModel } from './requirenteavenimiento.model';
import { RequirenteCitacionModel } from './requirentecitacion.model';
import { RequirenteCasoCollection } from './requirentecaso.collection';
import { RequirenteNotaAvenimientoCollection } from './requirentenotaavenimiento.collection';
import { RequirenteAvenimientoCollection } from './requirenteavenimiento.collection';
import { RequirenteCitacionCollection } from './requirentecitacion.collection';
//#endregion

export interface RolRequirente {
  //#region ODataApi Properties
  nombre: string;
  id: number;
  rev?: ArrayBuffer;
  key?: string;
  type?: string;
  shortname?: string;
  name?: string;
  longname?: string;
  requirenteCasos?: RequirenteCaso[];
  requirenteAvenimientos?: RequirenteAvenimiento[];
  requirenteCitaciones?: RequirenteCitacion[];
  requirenteNotasAvenimientos?: RequirenteNotaAvenimiento[];
  //#endregion
}