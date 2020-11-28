import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { MovimientoCasoConAgendado } from './movimientocasoconagendado.entity';
import { MovimientoCasoConAgendadoModel } from './movimientocasoconagendado.model';
//#endregion

export class MovimientoCasoConAgendadoCollection<E extends MovimientoCasoConAgendado, M extends MovimientoCasoConAgendadoModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}