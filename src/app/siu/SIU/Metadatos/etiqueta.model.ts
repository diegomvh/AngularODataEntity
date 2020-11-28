import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
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
import { CasoModel } from '../Tramites/caso.model';
import { IntervencionModel } from '../Tramites/intervencion.model';
import { CategoriaCollection } from './categoria.collection';
import { EtiquetaCollection } from './etiqueta.collection';
import { CasoCollection } from '../Tramites/caso.collection';
import { IntervencionCollection } from '../Tramites/intervencion.collection';
//#endregion

export class EtiquetaModel<E extends Etiqueta> extends ODataModel<E> {
  //#region ODataApi Properties
  nombre: string;
  slug: string;
  descripcion?: string;
  opciones: EtiquetaOpciones;
  id: number;
  rev?: ArrayBuffer;
  key?: string;
  type?: string;
  shortname?: string;
  name?: string;
  longname?: string;
  categorias?: CategoriaCollection<Categoria, CategoriaModel<Categoria>>;
  casos?: CasoCollection<Caso, CasoModel<Caso>>;
  intervenciones?: IntervencionCollection<Intervencion, IntervencionModel<Intervencion>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}