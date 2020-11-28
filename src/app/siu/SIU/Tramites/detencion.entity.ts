import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { LugarDetencion } from '../Lugares/lugardetencion.entity';
import { Localidad } from '../Lugares/localidad.entity';
import { Requirente } from '../Personas/requirente.entity';
import { CasoPenal } from './casopenal.entity';
import { LugarDetencionModel } from '../Lugares/lugardetencion.model';
import { LocalidadModel } from '../Lugares/localidad.model';
import { RequirenteModel } from '../Personas/requirente.model';
import { CasoPenalModel } from './casopenal.model';
import { LugarDetencionCollection } from '../Lugares/lugardetencion.collection';
import { LocalidadCollection } from '../Lugares/localidad.collection';
import { RequirenteCollection } from '../Personas/requirente.collection';
import { CasoPenalCollection } from './casopenal.collection';
//#endregion

export interface Detencion {
  //#region ODataApi Properties
  casoPenalId?: number;
  requirenteId?: number;
  localidadId?: number;
  lugarDetencionId?: number;
  desde: Date;
  hasta?: Date;
  observaciones?: string;
  prision_Domiciliaria?: boolean;
  institucion_Sanitaria?: boolean;
  id: number;
  rev?: ArrayBuffer;
  key?: string;
  type?: string;
  shortname?: string;
  name?: string;
  longname?: string;
  casoPenal?: CasoPenal;
  localidad?: Localidad;
  lugarDetencion?: LugarDetencion;
  requirente?: Requirente;
  //#endregion
}