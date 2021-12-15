import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';

const FavoriteBtn = () => {
  const [toggleState, changeToggle] = useState<boolean>(false);

  const changeHeart = () => {
    if (toggleState === false) {
      return changeToggle(true);
    }
    return changeToggle(false);
  };

  return (
    <button className="w-10 h-10 text-xs" onClick={changeHeart}>
      {toggleState === true ? (
        <FontAwesomeIcon
          className="text-red-600 fill-current"
          icon={faHeart}
          size="2x"
        />
      ) : (
        <FontAwesomeIcon
          className="text-red-600 fill-current hover:text-red-600"
          icon={farHeart}
          size="2x"
        />
      )}
    </button>
  );
};

export default FavoriteBtn;
