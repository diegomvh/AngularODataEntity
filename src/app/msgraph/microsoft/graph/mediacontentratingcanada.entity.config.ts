import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { MediaContentRatingCanada } from './mediacontentratingcanada.entity';
//#endregion

export const MediaContentRatingCanadaConfig = {
  name: "mediaContentRatingCanada",
  annotations: [],
  fields: {
    movieRating: {type: 'graph.ratingCanadaMoviesType', nullable: false},
    tvRating: {type: 'graph.ratingCanadaTelevisionType', nullable: false}
  }
} as EntityConfig<MediaContentRatingCanada>;