import classes from './MainCarousel.module.scss'

export default function CarouselImage({ imageUrl }) {
  return (
    <div className={classes['carousel-image-wrapper']}>
      <img
        className={classes['carousel-image-wrapper__image']}
        src={imageUrl}
        alt="carousel image"
      />
    </div>
  )
}
