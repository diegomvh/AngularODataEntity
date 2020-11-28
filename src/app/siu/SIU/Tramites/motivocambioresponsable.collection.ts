import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EmpleadoCaso } from './empleadocaso.entity';
import { MotivoCambioResponsable } from './motivocambioresponsable.entity';
import { HistoricoResponsable } from './historicoresponsable.entity';
import { EmpleadoCasoModel } from './empleadocaso.model';
import { MotivoCambioResponsableModel } from './motivocambioresponsable.model';
import { HistoricoResponsableModel } from './historicoresponsable.model';
import { EmpleadoCasoCollection } from './empleadocaso.collection';
import { HistoricoResponsableCollection } from './historicoresponsable.collection';
//#endregion

export class MotivoCambioResponsableCollection<E extends MotivoCambioResponsable, M extends MotivoCambioResponsableModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}