import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Empleado } from '../Personas/empleado.entity';
import { Audiencia } from './audiencia.entity';
import { RequirenteCitacion } from './requirentecitacion.entity';
import { EmpleadoModel } from '../Personas/empleado.model';
import { AudienciaModel } from './audiencia.model';
import { RequirenteCitacionModel } from './requirentecitacion.model';
import { EmpleadoCollection } from '../Personas/empleado.collection';
import { AudienciaCollection } from './audiencia.collection';
import { RequirenteCitacionCollection } from './requirentecitacion.collection';
//#endregion

export interface Citacion {
  //#region ODataApi Properties
  audienciaId?: number;
  empleadoAltaId: number;
  fechaImpresion: Date;
  tipo: string;
  id: number;
  rev?: ArrayBuffer;
  key?: string;
  type?: string;
  shortname?: string;
  name?: string;
  longname?: string;
  audiencia?: Audiencia;
  empleado?: Empleado;
  requirenteCitaciones?: RequirenteCitacion[];
  //#endregion
}