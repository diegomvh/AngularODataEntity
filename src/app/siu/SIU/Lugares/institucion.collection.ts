import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Institucion } from './institucion.entity';
import { Localidad } from './localidad.entity';
import { Intervencion } from '../Tramites/intervencion.entity';
import { InstitucionModel } from './institucion.model';
import { LocalidadModel } from './localidad.model';
import { IntervencionModel } from '../Tramites/intervencion.model';
import { LocalidadCollection } from './localidad.collection';
import { IntervencionCollection } from '../Tramites/intervencion.collection';
//#endregion

export class InstitucionCollection<E extends Institucion, M extends InstitucionModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}