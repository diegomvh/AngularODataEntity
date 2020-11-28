import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Expediente } from './expediente.entity';
import { CategoriaExpediente } from './categoriaexpediente.entity';
import { ExpedienteModel } from './expediente.model';
import { CategoriaExpedienteModel } from './categoriaexpediente.model';
import { ExpedienteCollection } from './expediente.collection';
//#endregion

export class CategoriaExpedienteCollection<E extends CategoriaExpediente, M extends CategoriaExpedienteModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}