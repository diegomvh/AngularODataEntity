import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Circunscripcion } from './circunscripcion.entity';
import { Fiscalia } from './fiscalia.entity';
import { Oficina } from './oficina.entity';
import { Institucion } from './institucion.entity';
import { LugarDetencion } from './lugardetencion.entity';
import { Provincia } from './provincia.entity';
import { Empleado } from '../Personas/empleado.entity';
import { RequirenteOficina } from '../Personas/requirenteoficina.entity';
import { CasoPenal } from '../Tramites/casopenal.entity';
import { Detencion } from '../Tramites/detencion.entity';
import { CircunscripcionModel } from './circunscripcion.model';
import { FiscaliaModel } from './fiscalia.model';
import { OficinaModel } from './oficina.model';
import { InstitucionModel } from './institucion.model';
import { LugarDetencionModel } from './lugardetencion.model';
import { ProvinciaModel } from './provincia.model';
import { EmpleadoModel } from '../Personas/empleado.model';
import { RequirenteOficinaModel } from '../Personas/requirenteoficina.model';
import { CasoPenalModel } from '../Tramites/casopenal.model';
import { DetencionModel } from '../Tramites/detencion.model';
import { CircunscripcionCollection } from './circunscripcion.collection';
import { FiscaliaCollection } from './fiscalia.collection';
import { OficinaCollection } from './oficina.collection';
import { InstitucionCollection } from './institucion.collection';
import { LugarDetencionCollection } from './lugardetencion.collection';
import { ProvinciaCollection } from './provincia.collection';
import { EmpleadoCollection } from '../Personas/empleado.collection';
import { RequirenteOficinaCollection } from '../Personas/requirenteoficina.collection';
import { CasoPenalCollection } from '../Tramites/casopenal.collection';
import { DetencionCollection } from '../Tramites/detencion.collection';
//#endregion

export interface Localidad {
  //#region ODataApi Properties
  provinciaId?: number;
  nombre: string;
  cp?: string;
  oculto: boolean;
  mpf?: boolean;
  circunscripcionId?: number;
  longname?: string;
  id: number;
  rev?: ArrayBuffer;
  key?: string;
  type?: string;
  shortname?: string;
  name?: string;
  provincia?: Provincia;
  circunscripcion?: Circunscripcion;
  oficinas?: Oficina[];
  fiscalias?: Fiscalia[];
  casosPenales?: CasoPenal[];
  detenciones?: Detencion[];
  empleados?: Empleado[];
  instituciones?: Institucion[];
  lugaresDetencion?: LugarDetencion[];
  requirenteOficinas?: RequirenteOficina[];
  //#endregion
}