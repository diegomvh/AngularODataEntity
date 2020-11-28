import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Requirente } from '../Personas/requirente.entity';
import { EstadoCivil } from '../Personas/estadocivil.entity';
import { RequirenteNotaAvenimiento } from './requirentenotaavenimiento.entity';
import { NotaAvenimiento } from './notaavenimiento.entity';
import { RolRequirente } from './rolrequirente.entity';
import { RequirenteModel } from '../Personas/requirente.model';
import { EstadoCivilModel } from '../Personas/estadocivil.model';
import { NotaAvenimientoModel } from './notaavenimiento.model';
import { RolRequirenteModel } from './rolrequirente.model';
import { RequirenteCollection } from '../Personas/requirente.collection';
import { EstadoCivilCollection } from '../Personas/estadocivil.collection';
import { RequirenteNotaAvenimientoCollection } from './requirentenotaavenimiento.collection';
import { NotaAvenimientoCollection } from './notaavenimiento.collection';
import { RolRequirenteCollection } from './rolrequirente.collection';
//#endregion

export class RequirenteNotaAvenimientoModel<E extends RequirenteNotaAvenimiento> extends ODataModel<E> {
  //#region ODataApi Properties
  requirenteId?: number;
  notaAvenimientoId?: number;
  key?: string;
  rolRequirenteId?: number;
  estadoCivilId?: number;
  domicilio?: string;
  hijos?: string;
  abogadoPatrocinante?: string;
  observaciones?: string;
  type?: string;
  shortname?: string;
  name?: string;
  longname?: string;
  requirente?: RequirenteModel<Requirente>;
  notaAvenimiento?: NotaAvenimientoModel<NotaAvenimiento>;
  estadoCivil?: EstadoCivilModel<EstadoCivil>;
  rolRequirente?: RolRequirenteModel<RolRequirente>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}