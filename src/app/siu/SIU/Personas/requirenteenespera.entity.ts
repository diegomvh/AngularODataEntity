import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Oficina } from '../Lugares/oficina.entity';
import { Requirente } from './requirente.entity';
import { Empleado } from './empleado.entity';
import { Caso } from '../Tramites/caso.entity';
import { CategoriaCaso } from '../Tramites/categoriacaso.entity';
import { SubMateria } from '../Tramites/submateria.entity';
import { OficinaModel } from '../Lugares/oficina.model';
import { RequirenteModel } from './requirente.model';
import { EmpleadoModel } from './empleado.model';
import { CasoModel } from '../Tramites/caso.model';
import { CategoriaCasoModel } from '../Tramites/categoriacaso.model';
import { SubMateriaModel } from '../Tramites/submateria.model';
import { OficinaCollection } from '../Lugares/oficina.collection';
import { RequirenteCollection } from './requirente.collection';
import { EmpleadoCollection } from './empleado.collection';
import { CasoCollection } from '../Tramites/caso.collection';
import { CategoriaCasoCollection } from '../Tramites/categoriacaso.collection';
import { SubMateriaCollection } from '../Tramites/submateria.collection';
//#endregion

export interface RequirenteEnEspera {
  //#region ODataApi Properties
  fecha?: Date;
  modificado?: Date;
  referenteId?: number;
  enAtencion?: boolean;
  casoId?: number;
  requirenteId?: number;
  oficinaId?: number;
  categoriaCasoId?: number;
  subMateriaId?: number;
  atendiendoId?: number;
  observaciones?: string;
  responsableId?: number;
  atendido?: boolean;
  ausente?: boolean;
  subResponsableId?: number;
  registranteId?: number;
  prioridad?: string;
  id: number;
  rev?: ArrayBuffer;
  key?: string;
  type?: string;
  shortname?: string;
  name?: string;
  longname?: string;
  caso?: Caso;
  categoriaCaso?: CategoriaCaso;
  registrante?: Empleado;
  referente?: Empleado;
  responsable?: Empleado;
  subResponsable?: Empleado;
  atendiendo?: Empleado;
  oficina?: Oficina;
  requirente?: Requirente;
  subMateria?: SubMateria;
  //#endregion
}