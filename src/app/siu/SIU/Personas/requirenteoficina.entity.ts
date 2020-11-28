import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Oficina } from '../Lugares/oficina.entity';
import { Localidad } from '../Lugares/localidad.entity';
import { Requirente } from './requirente.entity';
import { Empleado } from './empleado.entity';
import { OficinaModel } from '../Lugares/oficina.model';
import { LocalidadModel } from '../Lugares/localidad.model';
import { RequirenteModel } from './requirente.model';
import { EmpleadoModel } from './empleado.model';
import { OficinaCollection } from '../Lugares/oficina.collection';
import { LocalidadCollection } from '../Lugares/localidad.collection';
import { RequirenteCollection } from './requirente.collection';
import { EmpleadoCollection } from './empleado.collection';
//#endregion

export interface RequirenteOficina {
  //#region ODataApi Properties
  requirenteId?: number;
  oficinaId?: number;
  key?: string;
  empleadoId?: number;
  localidadId?: number;
  direccion?: string;
  barrio?: string;
  telefono?: string;
  observaciones?: string;
  fechaUltimaActualizacion: Date;
  type?: string;
  shortname?: string;
  name?: string;
  longname?: string;
  requirente?: Requirente;
  oficina?: Oficina;
  localidad?: Localidad;
  empleado?: Empleado;
  //#endregion
}