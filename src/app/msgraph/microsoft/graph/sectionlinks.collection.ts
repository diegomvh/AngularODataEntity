import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ExternalLink } from './externallink.entity';
import { SectionLinks } from './sectionlinks.entity';
import { ExternalLinkModel } from './externallink.model';
import { SectionLinksModel } from './sectionlinks.model';
import { ExternalLinkCollection } from './externallink.collection';
//#endregion

export class SectionLinksCollection<E extends SectionLinks, M extends SectionLinksModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}