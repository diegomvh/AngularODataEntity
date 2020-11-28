import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Circunscripcion } from './circunscripcion.entity';
import { Localidad } from './localidad.entity';
import { CircunscripcionModel } from './circunscripcion.model';
import { LocalidadModel } from './localidad.model';
import { LocalidadCollection } from './localidad.collection';
//#endregion

export class CircunscripcionCollection<E extends Circunscripcion, M extends CircunscripcionModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}