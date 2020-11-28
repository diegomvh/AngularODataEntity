import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Empleado } from '../Personas/empleado.entity';
import { Caso } from './caso.entity';
import { MotivoCambioResponsable } from './motivocambioresponsable.entity';
import { HistoricoResponsable } from './historicoresponsable.entity';
import { EmpleadoModel } from '../Personas/empleado.model';
import { CasoModel } from './caso.model';
import { MotivoCambioResponsableModel } from './motivocambioresponsable.model';
import { EmpleadoCollection } from '../Personas/empleado.collection';
import { CasoCollection } from './caso.collection';
import { MotivoCambioResponsableCollection } from './motivocambioresponsable.collection';
import { HistoricoResponsableCollection } from './historicoresponsable.collection';
//#endregion

export class HistoricoResponsableModel<E extends HistoricoResponsable> extends ODataModel<E> {
  //#region ODataApi Properties
  empleadoId?: number;
  casoId?: number;
  hasta: Date;
  key?: string;
  motivoCambioResponsableId?: number;
  observaciones?: string;
  desde: Date;
  type?: string;
  shortname?: string;
  name?: string;
  longname?: string;
  caso?: CasoModel<Caso>;
  empleado?: EmpleadoModel<Empleado>;
  motivoCambioResponsable?: MotivoCambioResponsableModel<MotivoCambioResponsable>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}