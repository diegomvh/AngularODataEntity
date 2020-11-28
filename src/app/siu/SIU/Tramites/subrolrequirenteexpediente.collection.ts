import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { RequirenteExpediente } from './requirenteexpediente.entity';
import { SubRolRequirenteExpediente } from './subrolrequirenteexpediente.entity';
import { RequirenteExpedienteModel } from './requirenteexpediente.model';
import { SubRolRequirenteExpedienteModel } from './subrolrequirenteexpediente.model';
import { RequirenteExpedienteCollection } from './requirenteexpediente.collection';
//#endregion

export class SubRolRequirenteExpedienteCollection<E extends SubRolRequirenteExpediente, M extends SubRolRequirenteExpedienteModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}