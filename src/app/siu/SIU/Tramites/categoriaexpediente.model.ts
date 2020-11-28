import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Expediente } from './expediente.entity';
import { CategoriaExpediente } from './categoriaexpediente.entity';
import { ExpedienteModel } from './expediente.model';
import { ExpedienteCollection } from './expediente.collection';
import { CategoriaExpedienteCollection } from './categoriaexpediente.collection';
//#endregion

export class CategoriaExpedienteModel<E extends CategoriaExpediente> extends ODataModel<E> {
  //#region ODataApi Properties
  nombre: string;
  id: number;
  rev?: ArrayBuffer;
  key?: string;
  type?: string;
  shortname?: string;
  name?: string;
  longname?: string;
  expedientes?: ExpedienteCollection<Expediente, ExpedienteModel<Expediente>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}