import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
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
import { EstadoCivilModel } from './estadocivil.model';
import { RequirenteNotaAvenimientoModel } from '../Tramites/requirentenotaavenimiento.model';
import { RequirenteCollection } from './requirente.collection';
import { DeclaracionJuradaCollection } from './declaracionjurada.collection';
import { RequirenteNotaAvenimientoCollection } from '../Tramites/requirentenotaavenimiento.collection';
//#endregion

export class EstadoCivilCollection<E extends EstadoCivil, M extends EstadoCivilModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}