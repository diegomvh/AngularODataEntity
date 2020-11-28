import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
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
import { RequirenteNotaAvenimientoModel } from './requirentenotaavenimiento.model';
import { NotaAvenimientoModel } from './notaavenimiento.model';
import { RolRequirenteModel } from './rolrequirente.model';
import { RequirenteCollection } from '../Personas/requirente.collection';
import { EstadoCivilCollection } from '../Personas/estadocivil.collection';
import { NotaAvenimientoCollection } from './notaavenimiento.collection';
import { RolRequirenteCollection } from './rolrequirente.collection';
//#endregion

export class RequirenteNotaAvenimientoCollection<E extends RequirenteNotaAvenimiento, M extends RequirenteNotaAvenimientoModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}