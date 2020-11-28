import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
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
import { RolRequirenteModel } from './rolrequirente.model';
import { RequirenteCollection } from '../Personas/requirente.collection';
import { CitacionCollection } from './citacion.collection';
import { RequirenteCitacionCollection } from './requirentecitacion.collection';
import { RolRequirenteCollection } from './rolrequirente.collection';
//#endregion

export class RequirenteCitacionModel<E extends RequirenteCitacion> extends ODataModel<E> {
  //#region ODataApi Properties
  requirenteId?: number;
  citacionId?: number;
  key?: string;
  rolRequirenteId?: number;
  domicilio?: string;
  type?: string;
  shortname?: string;
  name?: string;
  longname?: string;
  requirente?: RequirenteModel<Requirente>;
  citacion?: CitacionModel<Citacion>;
  rolRequirente?: RolRequirenteModel<RolRequirente>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}