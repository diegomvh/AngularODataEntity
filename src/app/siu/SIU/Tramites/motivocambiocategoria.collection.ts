import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { CategoriaCasoCaso } from './categoriacasocaso.entity';
import { MotivoCambioCategoria } from './motivocambiocategoria.entity';
import { CategoriaCasoCasoModel } from './categoriacasocaso.model';
import { MotivoCambioCategoriaModel } from './motivocambiocategoria.model';
import { CategoriaCasoCasoCollection } from './categoriacasocaso.collection';
//#endregion

export class MotivoCambioCategoriaCollection<E extends MotivoCambioCategoria, M extends MotivoCambioCategoriaModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}