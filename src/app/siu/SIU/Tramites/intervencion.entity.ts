import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { IntervencionTipos } from './intervenciontipos.enum';
import { Etiqueta } from '../Metadatos/etiqueta.entity';
import { Recurso } from '../Recursos/recurso.entity';
import { Oficina } from '../Lugares/oficina.entity';
import { Institucion } from '../Lugares/institucion.entity';
import { Requirente } from '../Personas/requirente.entity';
import { Empleado } from '../Personas/empleado.entity';
import { Caso } from './caso.entity';
import { EtiquetaModel } from '../Metadatos/etiqueta.model';
import { RecursoModel } from '../Recursos/recurso.model';
import { OficinaModel } from '../Lugares/oficina.model';
import { InstitucionModel } from '../Lugares/institucion.model';
import { RequirenteModel } from '../Personas/requirente.model';
import { EmpleadoModel } from '../Personas/empleado.model';
import { CasoModel } from './caso.model';
import { EtiquetaCollection } from '../Metadatos/etiqueta.collection';
import { RecursoCollection } from '../Recursos/recurso.collection';
import { OficinaCollection } from '../Lugares/oficina.collection';
import { InstitucionCollection } from '../Lugares/institucion.collection';
import { RequirenteCollection } from '../Personas/requirente.collection';
import { EmpleadoCollection } from '../Personas/empleado.collection';
import { CasoCollection } from './caso.collection';
//#endregion

export interface Intervencion {
  //#region ODataApi Properties
  institucionId?: number;
  requirenteId?: number;
  empleadoId?: number;
  oficinaId?: number;
  casoId?: number;
  desde?: Date;
  hasta?: Date;
  infoPublica?: string;
  infoPrivada?: string;
  infoOficina?: string;
  atendido?: boolean;
  enAtencion?: boolean;
  operador?: string;
  gestionAdministrativa: boolean;
  sistema: boolean;
  tipo: IntervencionTipos;
  esModificable: boolean;
  esEliminable: boolean;
  id: number;
  rev?: ArrayBuffer;
  key?: string;
  type?: string;
  shortname?: string;
  name?: string;
  longname?: string;
  recursos?: Recurso[];
  etiquetas?: Etiqueta[];
  empleado?: Empleado;
  oficina?: Oficina;
  requirente?: Requirente;
  caso?: Caso;
  institucion?: Institucion;
  //#endregion
}