import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { RecursoTipoEstado } from './recursotipoestado.enum';
import { RecursoEstadoMetadata } from './recursoestadometadata.entity';
import { Recurso } from './recurso.entity';
import { Empleado } from '../Personas/empleado.entity';
import { RecursoEstadoMetadataModel } from './recursoestadometadata.model';
import { RecursoModel } from './recurso.model';
import { EmpleadoModel } from '../Personas/empleado.model';
import { RecursoEstadoMetadataCollection } from './recursoestadometadata.collection';
import { RecursoCollection } from './recurso.collection';
import { EmpleadoCollection } from '../Personas/empleado.collection';
//#endregion

export interface RecursoEstado {
  //#region ODataApi Properties
  recursoId?: number;
  usuarioId: number;
  tipo: RecursoTipoEstado;
  _Metadata?: string;
  metadata?: RecursoEstadoMetadata;
  nombre: string;
  fecha: Date;
  id: number;
  rev?: ArrayBuffer;
  key?: string;
  type?: string;
  shortname?: string;
  name?: string;
  longname?: string;
  recurso?: Recurso;
  usuario?: Empleado;
  //#endregion
}