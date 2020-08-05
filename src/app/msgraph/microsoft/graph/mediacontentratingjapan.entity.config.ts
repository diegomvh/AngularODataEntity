import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { MediaContentRatingJapan } from './mediacontentratingjapan.entity';
//#endregion

export const MediaContentRatingJapanConfig = {
  name: "MediaContentRatingJapan",
  annotations: [],
  fields: {
    movieRating: {type: 'graph.ratingJapanMoviesType', nullable: false},
    tvRating: {type: 'graph.ratingJapanTelevisionType', nullable: false}
  }
} as EntityConfig<MediaContentRatingJapan>;