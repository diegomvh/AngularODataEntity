import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { RequirenteExpediente } from './requirenteexpediente.entity';
import { RolRequirenteExpediente } from './rolrequirenteexpediente.entity';
import { RequirenteExpedienteModel } from './requirenteexpediente.model';
import { RequirenteExpedienteCollection } from './requirenteexpediente.collection';
import { RolRequirenteExpedienteCollection } from './rolrequirenteexpediente.collection';
//#endregion

export class RolRequirenteExpedienteModel<E extends RolRequirenteExpediente> extends ODataModel<E> {
  //#region ODataApi Properties
  nombre: string;
  id: number;
  rev?: ArrayBuffer;
  key?: string;
  type?: string;
  shortname?: string;
  name?: string;
  longname?: string;
  requirenteExpedientes?: RequirenteExpedienteCollection<RequirenteExpediente, RequirenteExpedienteModel<RequirenteExpediente>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}