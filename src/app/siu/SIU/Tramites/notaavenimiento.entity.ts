import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Empleado } from '../Personas/empleado.entity';
import { Caso } from './caso.entity';
import { RequirenteNotaAvenimiento } from './requirentenotaavenimiento.entity';
import { SubMateria } from './submateria.entity';
import { EmpleadoModel } from '../Personas/empleado.model';
import { CasoModel } from './caso.model';
import { RequirenteNotaAvenimientoModel } from './requirentenotaavenimiento.model';
import { SubMateriaModel } from './submateria.model';
import { EmpleadoCollection } from '../Personas/empleado.collection';
import { CasoCollection } from './caso.collection';
import { RequirenteNotaAvenimientoCollection } from './requirentenotaavenimiento.collection';
import { SubMateriaCollection } from './submateria.collection';
//#endregion

export interface NotaAvenimiento {
  //#region ODataApi Properties
  casoId?: number;
  subMateriaId?: number;
  nroNota: number;
  fecha: Date;
  observaciones?: string;
  asunto?: string;
  referenteId?: number;
  responsableId: number;
  subResponsableId?: number;
  empleadoAltaId?: number;
  fechaAlta?: Date;
  incluyePoder?: boolean;
  id: number;
  rev?: ArrayBuffer;
  key?: string;
  type?: string;
  shortname?: string;
  name?: string;
  longname?: string;
  caso?: Caso;
  responsable?: Empleado;
  empleadoAlta?: Empleado;
  referente?: Empleado;
  subResponsable?: Empleado;
  subMateria?: SubMateria;
  requirentes?: RequirenteNotaAvenimiento[];
  //#endregion
}