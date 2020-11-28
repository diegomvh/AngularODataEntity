import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { MovimientoCaso } from './movimientocaso.entity';
import { EstadoRequirenteCaso } from './estadorequirentecaso.entity';
import { MovimientoCasoModel } from './movimientocaso.model';
import { MovimientoCasoCollection } from './movimientocaso.collection';
import { EstadoRequirenteCasoCollection } from './estadorequirentecaso.collection';
//#endregion

export class EstadoRequirenteCasoModel<E extends EstadoRequirenteCaso> extends ODataModel<E> {
  //#region ODataApi Properties
  nombre: string;
  descVen1?: string;
  plazoVen1?: string;
  descVen2?: string;
  plazoVen2?: string;
  suspPlazo: boolean;
  esRebeldia: boolean;
  esOrdenDetencion: boolean;
  esOrdenCaptura: boolean;
  id: number;
  rev?: ArrayBuffer;
  key?: string;
  type?: string;
  shortname?: string;
  name?: string;
  longname?: string;
  movimientoCasos?: MovimientoCasoCollection<MovimientoCaso, MovimientoCasoModel<MovimientoCaso>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}