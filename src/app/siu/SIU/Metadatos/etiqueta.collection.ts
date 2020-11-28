import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EtiquetaOpciones } from './etiquetaopciones.enum';
import { Categoria } from './categoria.entity';
import { Etiqueta } from './etiqueta.entity';
import { Caso } from '../Tramites/caso.entity';
import { Intervencion } from '../Tramites/intervencion.entity';
import { CategoriaModel } from './categoria.model';
import { EtiquetaModel } from './etiqueta.model';
import { CasoModel } from '../Tramites/caso.model';
import { IntervencionModel } from '../Tramites/intervencion.model';
import { CategoriaCollection } from './categoria.collection';
import { CasoCollection } from '../Tramites/caso.collection';
import { IntervencionCollection } from '../Tramites/intervencion.collection';
//#endregion

export class EtiquetaCollection<E extends Etiqueta, M extends EtiquetaModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}