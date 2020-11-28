import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Requirente } from '../Personas/requirente.entity';
import { Empleado } from '../Personas/empleado.entity';
import { Avenimiento } from './avenimiento.entity';
import { RequirenteAvenimiento } from './requirenteavenimiento.entity';
import { RolRequirente } from './rolrequirente.entity';
import { RequirenteModel } from '../Personas/requirente.model';
import { EmpleadoModel } from '../Personas/empleado.model';
import { AvenimientoModel } from './avenimiento.model';
import { RolRequirenteModel } from './rolrequirente.model';
import { RequirenteCollection } from '../Personas/requirente.collection';
import { EmpleadoCollection } from '../Personas/empleado.collection';
import { AvenimientoCollection } from './avenimiento.collection';
import { RequirenteAvenimientoCollection } from './requirenteavenimiento.collection';
import { RolRequirenteCollection } from './rolrequirente.collection';
//#endregion

export class RequirenteAvenimientoModel<E extends RequirenteAvenimiento> extends ODataModel<E> {
  //#region ODataApi Properties
  requirenteId?: number;
  avenimientoId?: number;
  key?: string;
  rolRequirenteId?: number;
  domicilio?: string;
  patrocinanteParticular?: string;
  patrocinanteId?: number;
  type?: string;
  shortname?: string;
  name?: string;
  longname?: string;
  requirente?: RequirenteModel<Requirente>;
  avenimiento?: AvenimientoModel<Avenimiento>;
  patrocinante?: EmpleadoModel<Empleado>;
  rolRequirente?: RolRequirenteModel<RolRequirente>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}