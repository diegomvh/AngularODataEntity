import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Requirente } from './requirente.entity';
import { DeclaracionJurada } from './declaracionjurada.entity';
import { EstadoCivil } from './estadocivil.entity';
import { RequirenteNotaAvenimiento } from '../Tramites/requirentenotaavenimiento.entity';
import { RequirenteModel } from './requirente.model';
import { DeclaracionJuradaModel } from './declaracionjurada.model';
import { RequirenteNotaAvenimientoModel } from '../Tramites/requirentenotaavenimiento.model';
import { RequirenteCollection } from './requirente.collection';
import { DeclaracionJuradaCollection } from './declaracionjurada.collection';
import { EstadoCivilCollection } from './estadocivil.collection';
import { RequirenteNotaAvenimientoCollection } from '../Tramites/requirentenotaavenimiento.collection';
//#endregion

export class EstadoCivilModel<E extends EstadoCivil> extends ODataModel<E> {
  //#region ODataApi Properties
  descripcion: string;
  oculto: boolean;
  id: number;
  rev?: ArrayBuffer;
  key?: string;
  type?: string;
  shortname?: string;
  name?: string;
  longname?: string;
  declaracionesJuradas?: DeclaracionJuradaCollection<DeclaracionJurada, DeclaracionJuradaModel<DeclaracionJurada>>;
  requirentesNotasAvenimientos?: RequirenteNotaAvenimientoCollection<RequirenteNotaAvenimiento, RequirenteNotaAvenimientoModel<RequirenteNotaAvenimiento>>;
  requirentes?: RequirenteCollection<Requirente, RequirenteModel<Requirente>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}