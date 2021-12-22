import { useAppSelector, useAppDispatch, RootState } from '../types/reduxTypes';
import { bindActionCreators } from 'redux';
import { layoutActionCreator } from '../redux/actionReferences';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { addFavorite } from '../utilities/mutations';
import axios from 'axios';
import { toggleFav } from '../types/utilityTypes';

const FavoriteBtn = (toggle: toggleFav) => {
  const { heartedFavs } = useAppSelector((state: RootState) => state.layout);
  const dispatch = useAppDispatch();
  const { changeFavs } = bindActionCreators(layoutActionCreator, dispatch);
  const userId: number | null = localStorage.getItem('userId')
    ? parseInt(localStorage.getItem('userId'))
    : null;
  const currentProduct = toggle.product;

  const setFavorite = (uId: number, product: string) => {
    axios
      .post('/graphql', {
        query: addFavorite(uId, product),
      })
      .then((res) => {
        console.log(res);
        const newFavArray = heartedFavs;
        newFavArray.push(currentProduct);
        changeFavs(newFavArray);
        toggle.toggle = true;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <button
      className="w-10 h-10 text-xs"
      onClick={() => {
        setFavorite(userId, currentProduct);
      }}
    >
      {toggle.toggle ? (
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
