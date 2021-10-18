import React, { useState } from 'react';
import classNames from 'classnames';

import { generateImageUrl, ImageSizes } from "utils/tmdb";
import TrailerModal from './TrailerModal';

function MediaCard({ media, isLarge }) {
return (
  <div className="media-card">
    <img
     className={ classNames(
       "media-card__poster",
       {
         "media-card__poster--large":isLarge
       },
      )}
     src={isLarge 
       ? generateImageUrl(media.poster_path,ImageSizes.poster)
       : generateImageUrl(media.backdrop_path,ImageSizes.card)
         }
     alt={media.title|| media.name || media.original_name}
     />
     <div className="media-card__cover">
     <div className="media-card__name">
      {media.title|| media.name || media.original_name}
     </div>

     </div>
  </div>
);
}

export default MediaCard;
