import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { CalidadRequirente } from './calidadrequirente.entity';
import { RequirenteCaso } from '../Tramites/requirentecaso.entity';
import { CalidadRequirenteModel } from './calidadrequirente.model';
import { RequirenteCasoModel } from '../Tramites/requirentecaso.model';
import { RequirenteCasoCollection } from '../Tramites/requirentecaso.collection';
//#endregion

export class CalidadRequirenteCollection<E extends CalidadRequirente, M extends CalidadRequirenteModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}