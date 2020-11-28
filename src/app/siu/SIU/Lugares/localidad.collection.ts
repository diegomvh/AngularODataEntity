import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
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
import { LocalidadModel } from './localidad.model';
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

export class LocalidadCollection<E extends Localidad, M extends LocalidadModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}