import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { RequirenteExpediente } from './requirenteexpediente.entity';
import { RolRequirenteExpediente } from './rolrequirenteexpediente.entity';
import { RequirenteExpedienteModel } from './requirenteexpediente.model';
import { RolRequirenteExpedienteModel } from './rolrequirenteexpediente.model';
import { RequirenteExpedienteCollection } from './requirenteexpediente.collection';
//#endregion

export class RolRequirenteExpedienteCollection<E extends RolRequirenteExpediente, M extends RolRequirenteExpedienteModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}