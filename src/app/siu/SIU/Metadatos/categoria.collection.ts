import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
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
import { CategoriaModel } from './categoria.model';
import { EtiquetaModel } from './etiqueta.model';
import { PlantillaModel } from '../Documentos/plantilla.model';
import { DocumentoModel } from '../Documentos/documento.model';
import { ArchivoModel } from '../Documentos/archivo.model';
import { EtiquetaCollection } from './etiqueta.collection';
import { PlantillaCollection } from '../Documentos/plantilla.collection';
import { DocumentoCollection } from '../Documentos/documento.collection';
import { ArchivoCollection } from '../Documentos/archivo.collection';
//#endregion

export class CategoriaCollection<E extends Categoria, M extends CategoriaModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  public rebuild(options?: HttpOptions): Observable<any> {
    var res = this._action<null, any>('SIU.Rebuild');
    res.segment.entitySet('categorias');
    return res.call(null, 'property', options) as Observable<any>;
  }
  //#endregion
  //#region ODataApi Functions
  public navegarOficina(oficinaId: number, chunks: string, options?: HttpOptions): Observable<CategoriaModel<Categoria>> {
    var res = this._function<{oficinaId: number, chunks: string}, Categoria>('SIU.NavegarOficina');
    res.segment.entitySet('categorias');
    return res.call({oficinaId, chunks}, 'model', options) as Observable<CategoriaModel<Categoria>>;
  }
  public categoriaDeCircunscripcion(circunscripcionId: number, options?: HttpOptions): Observable<CategoriaModel<Categoria>> {
    var res = this._function<{circunscripcionId: number}, Categoria>('SIU.CategoriaDeCircunscripcion');
    res.segment.entitySet('categorias');
    return res.call({circunscripcionId}, 'model', options) as Observable<CategoriaModel<Categoria>>;
  }
  public categoriaDeOficina(oficinaId: number, options?: HttpOptions): Observable<CategoriaModel<Categoria>> {
    var res = this._function<{oficinaId: number}, Categoria>('SIU.CategoriaDeOficina');
    res.segment.entitySet('categorias');
    return res.call({oficinaId}, 'model', options) as Observable<CategoriaModel<Categoria>>;
  }
  //#endregion
}