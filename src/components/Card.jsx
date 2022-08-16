import classes from './Card.module.css'
import Weather from './Weather'

const Card = (props) => {
  return (
    <div className={classes.card}>
      <Weather />
    </div>
  )
}

export default Card
