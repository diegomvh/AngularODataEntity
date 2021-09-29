//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Link } from './link.complex';
import { LinkModel } from './link.model';
import { LinkCollection } from './link.collection';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const LinkComplexConfig = {
  name: "Link",
  model: LinkModel,
  collection: LinkCollection,
  fields: {
    Text: {type: 'Edm.String'},
    Url: {type: 'Edm.String'},
    Prefix: {type: 'Edm.String'},
    TargetId: {type: 'Edm.String'},
    Icon: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<Link>;
//#endregion