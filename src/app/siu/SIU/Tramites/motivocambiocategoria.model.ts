import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { CategoriaCasoCaso } from './categoriacasocaso.entity';
import { MotivoCambioCategoria } from './motivocambiocategoria.entity';
import { CategoriaCasoCasoModel } from './categoriacasocaso.model';
import { CategoriaCasoCasoCollection } from './categoriacasocaso.collection';
import { MotivoCambioCategoriaCollection } from './motivocambiocategoria.collection';
//#endregion

export class MotivoCambioCategoriaModel<E extends MotivoCambioCategoria> extends ODataModel<E> {
  //#region ODataApi Properties
  motivo: string;
  descripcion?: string;
  oculto?: boolean;
  id: number;
  rev?: ArrayBuffer;
  key?: string;
  type?: string;
  shortname?: string;
  name?: string;
  longname?: string;
  categoriaCasoCasos?: CategoriaCasoCasoCollection<CategoriaCasoCaso, CategoriaCasoCasoModel<CategoriaCasoCaso>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}