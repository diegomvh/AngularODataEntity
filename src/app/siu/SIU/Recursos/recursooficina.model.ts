import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { RecursoPermisos } from './recursopermisos.enum';
import { Recurso } from './recurso.entity';
import { RecursoOficina } from './recursooficina.entity';
import { Oficina } from '../Lugares/oficina.entity';
import { RecursoModel } from './recurso.model';
import { OficinaModel } from '../Lugares/oficina.model';
import { RecursoCollection } from './recurso.collection';
import { RecursoOficinaCollection } from './recursooficina.collection';
import { OficinaCollection } from '../Lugares/oficina.collection';
//#endregion

export class RecursoOficinaModel<E extends RecursoOficina> extends ODataModel<E> {
  //#region ODataApi Properties
  recursoId?: number;
  oficinaId?: number;
  key?: string;
  fecha: Date;
  permisos: RecursoPermisos;
  type?: string;
  shortname?: string;
  name?: string;
  longname?: string;
  recurso?: RecursoModel<Recurso>;
  oficina?: OficinaModel<Oficina>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}