import Style from './CategoryCard.module.scss';
import { useNavigate } from 'react-router-dom';

const CategoryCard = ({ infoProp }) => {
  let history = useNavigate();
  return (
    <article
      className={`${Style.categoryCard} ${infoProp.size ? Style.largeBox : ''}`}
      onClick={() => {
        history(infoProp.linkUrl);
      }}
    >
      <div
        style={{
          backgroundImage: `url(${infoProp.imageUrl})`,
        }}
        className={Style.imageBox}
      ></div>
      <div className={Style.infoBox}>
        <h1>{infoProp.title}</h1>
        <p>SHOP NOW</p>
      </div>
    </article>
  );
};

export default CategoryCard;
