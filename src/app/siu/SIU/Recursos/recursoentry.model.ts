import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { RecursoOpciones } from './recursoopciones.enum';
import { RecursoPermisos } from './recursopermisos.enum';
import { InternalTypes } from '../Utilities/Types/internaltypes.enum';
import { RecursoEntry } from './recursoentry.entity';
import { RecursoSource } from './recursosource.entity';
import { RecursoSourceModel } from './recursosource.model';
import { RecursoEntryCollection } from './recursoentry.collection';
import { RecursoSourceCollection } from './recursosource.collection';
//#endregion

export class RecursoEntryModel<E extends RecursoEntry> extends ODataModel<E> {
  //#region ODataApi Properties
  recursoId?: number;
  nombre?: string;
  fecha: Date;
  contentType?: string;
  size: number;
  directory?: string;
  opciones: RecursoOpciones;
  permisos: RecursoPermisos;
  url?: string;
  source?: RecursoSourceModel<RecursoSource>;
  key?: string;
  extension?: string;
  file?: string;
  path?: string;
  internalType: InternalTypes;
  byteSize?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}