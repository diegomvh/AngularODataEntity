import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { CalidadRequirente } from './calidadrequirente.entity';
import { RequirenteCaso } from '../Tramites/requirentecaso.entity';
import { RequirenteCasoModel } from '../Tramites/requirentecaso.model';
import { CalidadRequirenteCollection } from './calidadrequirente.collection';
import { RequirenteCasoCollection } from '../Tramites/requirentecaso.collection';
//#endregion

export class CalidadRequirenteModel<E extends CalidadRequirente> extends ODataModel<E> {
  //#region ODataApi Properties
  nombre: string;
  criterioOrden: number;
  id: number;
  rev?: ArrayBuffer;
  key?: string;
  type?: string;
  shortname?: string;
  name?: string;
  longname?: string;
  rolRequirenteCasos?: RequirenteCasoCollection<RequirenteCaso, RequirenteCasoModel<RequirenteCaso>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}