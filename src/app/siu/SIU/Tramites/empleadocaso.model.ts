import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Empleado } from '../Personas/empleado.entity';
import { Caso } from './caso.entity';
import { EmpleadoCaso } from './empleadocaso.entity';
import { MotivoCambioResponsable } from './motivocambioresponsable.entity';
import { EmpleadoModel } from '../Personas/empleado.model';
import { CasoModel } from './caso.model';
import { MotivoCambioResponsableModel } from './motivocambioresponsable.model';
import { EmpleadoCollection } from '../Personas/empleado.collection';
import { CasoCollection } from './caso.collection';
import { EmpleadoCasoCollection } from './empleadocaso.collection';
import { MotivoCambioResponsableCollection } from './motivocambioresponsable.collection';
//#endregion

export class EmpleadoCasoModel<E extends EmpleadoCaso> extends ODataModel<E> {
  //#region ODataApi Properties
  empleadoId?: number;
  casoId?: number;
  desde: Date;
  key?: string;
  motivoCambioResponsableId?: number;
  observaciones?: string;
  hasta?: Date;
  type?: string;
  shortname?: string;
  name?: string;
  longname?: string;
  empleado?: EmpleadoModel<Empleado>;
  caso?: CasoModel<Caso>;
  motivoCambioResponsable?: MotivoCambioResponsableModel<MotivoCambioResponsable>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}