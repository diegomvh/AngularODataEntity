import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { EtiquetaOpciones } from './etiquetaopciones.enum';
import { Categoria } from './categoria.entity';
import { Caso } from '../Tramites/caso.entity';
import { Intervencion } from '../Tramites/intervencion.entity';
import { CategoriaModel } from './categoria.model';
import { CasoModel } from '../Tramites/caso.model';
import { IntervencionModel } from '../Tramites/intervencion.model';
import { CategoriaCollection } from './categoria.collection';
import { CasoCollection } from '../Tramites/caso.collection';
import { IntervencionCollection } from '../Tramites/intervencion.collection';
//#endregion

export interface Etiqueta {
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
  categorias?: Categoria[];
  casos?: Caso[];
  intervenciones?: Intervencion[];
  //#endregion
}