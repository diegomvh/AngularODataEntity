import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Requirente } from '../Personas/requirente.entity';
import { Citacion } from './citacion.entity';
import { RequirenteCitacion } from './requirentecitacion.entity';
import { RolRequirente } from './rolrequirente.entity';
import { RequirenteModel } from '../Personas/requirente.model';
import { CitacionModel } from './citacion.model';
import { RequirenteCitacionModel } from './requirentecitacion.model';
import { RolRequirenteModel } from './rolrequirente.model';
import { RequirenteCollection } from '../Personas/requirente.collection';
import { CitacionCollection } from './citacion.collection';
import { RolRequirenteCollection } from './rolrequirente.collection';
//#endregion

export class RequirenteCitacionCollection<E extends RequirenteCitacion, M extends RequirenteCitacionModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}