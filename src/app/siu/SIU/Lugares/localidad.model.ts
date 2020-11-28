import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Circunscripcion } from './circunscripcion.entity';
import { Fiscalia } from './fiscalia.entity';
import { Oficina } from './oficina.entity';
import { Institucion } from './institucion.entity';
import { LugarDetencion } from './lugardetencion.entity';
import { Localidad } from './localidad.entity';
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
import { LocalidadCollection } from './localidad.collection';
import { ProvinciaCollection } from './provincia.collection';
import { EmpleadoCollection } from '../Personas/empleado.collection';
import { RequirenteOficinaCollection } from '../Personas/requirenteoficina.collection';
import { CasoPenalCollection } from '../Tramites/casopenal.collection';
import { DetencionCollection } from '../Tramites/detencion.collection';
//#endregion

export class LocalidadModel<E extends Localidad> extends ODataModel<E> {
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
  provincia?: ProvinciaModel<Provincia>;
  circunscripcion?: CircunscripcionModel<Circunscripcion>;
  oficinas?: OficinaCollection<Oficina, OficinaModel<Oficina>>;
  fiscalias?: FiscaliaCollection<Fiscalia, FiscaliaModel<Fiscalia>>;
  casosPenales?: CasoPenalCollection<CasoPenal, CasoPenalModel<CasoPenal>>;
  detenciones?: DetencionCollection<Detencion, DetencionModel<Detencion>>;
  empleados?: EmpleadoCollection<Empleado, EmpleadoModel<Empleado>>;
  instituciones?: InstitucionCollection<Institucion, InstitucionModel<Institucion>>;
  lugaresDetencion?: LugarDetencionCollection<LugarDetencion, LugarDetencionModel<LugarDetencion>>;
  requirenteOficinas?: RequirenteOficinaCollection<RequirenteOficina, RequirenteOficinaModel<RequirenteOficina>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}