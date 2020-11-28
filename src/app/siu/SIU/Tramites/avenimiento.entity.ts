import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Oficina } from '../Lugares/oficina.entity';
import { Empleado } from '../Personas/empleado.entity';
import { Caso } from './caso.entity';
import { Audiencia } from './audiencia.entity';
import { RequirenteAvenimiento } from './requirenteavenimiento.entity';
import { SubMateria } from './submateria.entity';
import { OficinaModel } from '../Lugares/oficina.model';
import { EmpleadoModel } from '../Personas/empleado.model';
import { CasoModel } from './caso.model';
import { AudienciaModel } from './audiencia.model';
import { RequirenteAvenimientoModel } from './requirenteavenimiento.model';
import { SubMateriaModel } from './submateria.model';
import { OficinaCollection } from '../Lugares/oficina.collection';
import { EmpleadoCollection } from '../Personas/empleado.collection';
import { CasoCollection } from './caso.collection';
import { AudienciaCollection } from './audiencia.collection';
import { RequirenteAvenimientoCollection } from './requirenteavenimiento.collection';
import { SubMateriaCollection } from './submateria.collection';
//#endregion

export interface Avenimiento {
  //#region ODataApi Properties
  oficinaId?: number;
  casoId?: number;
  subMateriaId?: number;
  empleadoId?: number;
  numero?: string;
  asunto?: string;
  fecha: Date;
  observaciones?: string;
  aDistancia?: boolean;
  id: number;
  rev?: ArrayBuffer;
  key?: string;
  type?: string;
  shortname?: string;
  name?: string;
  longname?: string;
  caso?: Caso;
  empleado?: Empleado;
  oficina?: Oficina;
  subMateria?: SubMateria;
  audiencias?: Audiencia[];
  requirentes?: RequirenteAvenimiento[];
  //#endregion
}