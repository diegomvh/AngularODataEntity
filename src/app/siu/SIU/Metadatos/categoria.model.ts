import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { CategoriaOpciones } from './categoriaopciones.enum';
import { Categoria } from './categoria.entity';
import { Etiqueta } from './etiqueta.entity';
import { Plantilla } from '../Documentos/plantilla.entity';
import { Documento } from '../Documentos/documento.entity';
import { Archivo } from '../Documentos/archivo.entity';
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

export class CategoriaModel<E extends Categoria> extends ODataModel<E> {
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
  documentos?: DocumentoCollection<Documento, DocumentoModel<Documento>>;
  plantillas?: PlantillaCollection<Plantilla, PlantillaModel<Plantilla>>;
  archivos?: ArchivoCollection<Archivo, ArchivoModel<Archivo>>;
  etiquetas?: EtiquetaCollection<Etiqueta, EtiquetaModel<Etiqueta>>;
  descendientes?: CategoriaCollection<Categoria, CategoriaModel<Categoria>>;
  ancestros?: CategoriaCollection<Categoria, CategoriaModel<Categoria>>;
  familia?: CategoriaCollection<Categoria, CategoriaModel<Categoria>>;
  parent?: CategoriaModel<Categoria>;
  children?: CategoriaCollection<Categoria, CategoriaModel<Categoria>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  public navegar(chunks: string, options?: HttpOptions): Observable<CategoriaModel<Categoria>> {
    var res = this._function<{chunks: string}, Categoria>('SIU.Navegar');
    res.segment.entitySet('categorias');
    return res.call({chunks}, 'model', options) as Observable<CategoriaModel<Categoria>>;
  }
  public directory(stopId: number, withStop: boolean, options?: HttpOptions): Observable<string> {
    var res = this._function<{stopId: number, withStop: boolean}, string>('SIU.Directory');
    res.segment.entitySet('categorias');
    return res.call({stopId, withStop}, 'property', options) as Observable<string>;
  }
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}