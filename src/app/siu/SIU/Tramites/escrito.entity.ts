import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Recurso } from '../Recursos/recurso.entity';
import { Oficina } from '../Lugares/oficina.entity';
import { Empleado } from '../Personas/empleado.entity';
import { Expediente } from './expediente.entity';
import { RecursoModel } from '../Recursos/recurso.model';
import { OficinaModel } from '../Lugares/oficina.model';
import { EmpleadoModel } from '../Personas/empleado.model';
import { ExpedienteModel } from './expediente.model';
import { RecursoCollection } from '../Recursos/recurso.collection';
import { OficinaCollection } from '../Lugares/oficina.collection';
import { EmpleadoCollection } from '../Personas/empleado.collection';
import { ExpedienteCollection } from './expediente.collection';
//#endregion

export interface Escrito {
  //#region ODataApi Properties
  empleadoId?: number;
  expedienteId?: number;
  extraprocesal?: boolean;
  contenido: string;
  fecha?: Date;
  empleadoRegistroId?: number;
  fechaRegistro?: Date;
  oficinaId?: number;
  esModificable: boolean;
  esEliminable: boolean;
  id: number;
  rev?: ArrayBuffer;
  key?: string;
  type?: string;
  shortname?: string;
  name?: string;
  longname?: string;
  empleado?: Empleado;
  empleadoRegistro?: Empleado;
  expediente?: Expediente;
  oficina?: Oficina;
  recursos?: Recurso[];
  //#endregion
}