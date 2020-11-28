import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Expediente } from './expediente.entity';
import { EstadoExpediente } from './estadoexpediente.entity';
import { ExpedienteModel } from './expediente.model';
import { EstadoExpedienteModel } from './estadoexpediente.model';
import { ExpedienteCollection } from './expediente.collection';
//#endregion

export class EstadoExpedienteCollection<E extends EstadoExpediente, M extends EstadoExpedienteModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}