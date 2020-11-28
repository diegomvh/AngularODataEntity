import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { CategoriaOpciones } from './categoriaopciones.enum';
import { Etiqueta } from './etiqueta.entity';
import { Plantilla } from '../Documentos/plantilla.entity';
import { Documento } from '../Documentos/documento.entity';
import { Archivo } from '../Documentos/archivo.entity';
import { CategoriaModel } from './categoria.model';
import { EtiquetaModel } from './etiqueta.model';
import { PlantillaModel } from '../Documentos/plantilla.model';
import { DocumentoModel } from '../Documentos/documento.model';
import { ArchivoModel } from '../Documentos/archivo.model';
import { CategoriaCollection } from './categoria.collection';
import { EtiquetaCollection } from './etiqueta.collection';
import { PlantillaCollection } from '../Documentos/plantilla.collection';
import { DocumentoCollection } from '../Documentos/documento.collection';
import { ArchivoCollection } from '../Documentos/archivo.collection';
//#endregion

export interface Categoria {
  //#region ODataApi Properties
  nombre: string;
  slug: string;
  descripcion?: string;
  opciones: CategoriaOpciones;
  shortname?: string;
  name?: string;
  longname?: string;
  lft?: number;
  rgt?: number;
  level?: number;
  parentId?: number;
  treeId?: number;
  id: number;
  rev?: ArrayBuffer;
  key?: string;
  type?: string;
  documentos?: Documento[];
  plantillas?: Plantilla[];
  archivos?: Archivo[];
  etiquetas?: Etiqueta[];
  descendientes?: Categoria[];
  ancestros?: Categoria[];
  familia?: Categoria[];
  parent?: Categoria;
  children?: Categoria[];
  //#endregion
}