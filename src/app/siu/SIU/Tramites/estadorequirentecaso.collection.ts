import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { MovimientoCaso } from './movimientocaso.entity';
import { EstadoRequirenteCaso } from './estadorequirentecaso.entity';
import { MovimientoCasoModel } from './movimientocaso.model';
import { EstadoRequirenteCasoModel } from './estadorequirentecaso.model';
import { MovimientoCasoCollection } from './movimientocaso.collection';
//#endregion

export class EstadoRequirenteCasoCollection<E extends EstadoRequirenteCaso, M extends EstadoRequirenteCasoModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}