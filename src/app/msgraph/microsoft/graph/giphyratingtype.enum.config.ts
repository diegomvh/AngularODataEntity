import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { GiphyRatingType } from './giphyratingtype.enum';
//#endregion

export const GiphyRatingTypeConfig = {
  name: "GiphyRatingType",
  members: GiphyRatingType
} as EnumConfig<GiphyRatingType>;