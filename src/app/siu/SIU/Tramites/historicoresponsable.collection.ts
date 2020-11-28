import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
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
import { HistoricoResponsableModel } from './historicoresponsable.model';
import { EmpleadoCollection } from '../Personas/empleado.collection';
import { CasoCollection } from './caso.collection';
import { MotivoCambioResponsableCollection } from './motivocambioresponsable.collection';
//#endregion

export class HistoricoResponsableCollection<E extends HistoricoResponsable, M extends HistoricoResponsableModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}