import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Institucion } from './institucion.entity';
import { Localidad } from './localidad.entity';
import { Intervencion } from '../Tramites/intervencion.entity';
import { LocalidadModel } from './localidad.model';
import { IntervencionModel } from '../Tramites/intervencion.model';
import { InstitucionCollection } from './institucion.collection';
import { LocalidadCollection } from './localidad.collection';
import { IntervencionCollection } from '../Tramites/intervencion.collection';
//#endregion

export class InstitucionModel<E extends Institucion> extends ODataModel<E> {
  //#region ODataApi Properties
  guid?: string;
  localidadId?: number;
  nombre?: string;
  direccion?: string;
  telefono?: string;
  id: number;
  rev?: ArrayBuffer;
  key?: string;
  type?: string;
  shortname?: string;
  name?: string;
  longname?: string;
  intervenciones?: IntervencionCollection<Intervencion, IntervencionModel<Intervencion>>;
  localidad?: LocalidadModel<Localidad>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}