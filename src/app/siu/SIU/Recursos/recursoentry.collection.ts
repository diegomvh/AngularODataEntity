import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { RecursoOpciones } from './recursoopciones.enum';
import { RecursoPermisos } from './recursopermisos.enum';
import { InternalTypes } from '../Utilities/Types/internaltypes.enum';
import { RecursoEntry } from './recursoentry.entity';
import { RecursoSource } from './recursosource.entity';
import { RecursoEntryModel } from './recursoentry.model';
import { RecursoSourceModel } from './recursosource.model';
import { RecursoSourceCollection } from './recursosource.collection';
//#endregion

export class RecursoEntryCollection<E extends RecursoEntry, M extends RecursoEntryModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}