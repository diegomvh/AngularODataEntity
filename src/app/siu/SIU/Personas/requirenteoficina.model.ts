import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Oficina } from '../Lugares/oficina.entity';
import { Localidad } from '../Lugares/localidad.entity';
import { Requirente } from './requirente.entity';
import { Empleado } from './empleado.entity';
import { RequirenteOficina } from './requirenteoficina.entity';
import { OficinaModel } from '../Lugares/oficina.model';
import { LocalidadModel } from '../Lugares/localidad.model';
import { RequirenteModel } from './requirente.model';
import { EmpleadoModel } from './empleado.model';
import { OficinaCollection } from '../Lugares/oficina.collection';
import { LocalidadCollection } from '../Lugares/localidad.collection';
import { RequirenteCollection } from './requirente.collection';
import { EmpleadoCollection } from './empleado.collection';
import { RequirenteOficinaCollection } from './requirenteoficina.collection';
//#endregion

export class RequirenteOficinaModel<E extends RequirenteOficina> extends ODataModel<E> {
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
  requirente?: RequirenteModel<Requirente>;
  oficina?: OficinaModel<Oficina>;
  localidad?: LocalidadModel<Localidad>;
  empleado?: EmpleadoModel<Empleado>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}