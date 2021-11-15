import Style from './CategoryCard.module.scss';

const CategoryCard = ({ title, imageUrl, id, size }) => {
  return (
    <article className={`${Style.categoryCard} ${size ? Style.largeBox : ''}`}>
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
        className={Style.imageBox}
      ></div>
      <div className={Style.infoBox}>
        <h1>{title}</h1>
        <p>SHOP NOW</p>
      </div>
    </article>
  );
};

export default CategoryCard;
