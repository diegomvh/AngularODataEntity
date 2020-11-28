import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { RecursoPermisos } from './recursopermisos.enum';
import { Recurso } from './recurso.entity';
import { RecursoOficina } from './recursooficina.entity';
import { Oficina } from '../Lugares/oficina.entity';
import { RecursoModel } from './recurso.model';
import { RecursoOficinaModel } from './recursooficina.model';
import { OficinaModel } from '../Lugares/oficina.model';
import { RecursoCollection } from './recurso.collection';
import { OficinaCollection } from '../Lugares/oficina.collection';
//#endregion

export class RecursoOficinaCollection<E extends RecursoOficina, M extends RecursoOficinaModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}