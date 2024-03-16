/* eslint-disable react/button-has-type */
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {
    Inccount: 0,
  }

  decrease = () => {
    const {Inccount} = this.state
    const {reviewsList} = this.props
    this.setState(prevState => ({
      Inccount:
        Inccount === 0 ? prevState.Inccount + 0 : prevState.Inccount - 1,
    }))
  }

  Increase = () => {
    const {reviewsList} = this.props
    const {Inccount} = this.state
    this.setState(prevState => ({
      Inccount:
        reviewsList.length - 1 > Inccount
          ? prevState.Inccount + 1
          : prevState.Inccount + 0,
    }))
  }

  render() {
    const {reviewsList} = this.props
    const {Inccount, Deccount} = this.state
    console.log(Inccount)
    console.log(Deccount)
    return (
      <div className="background-container">
        <h1 className="tittle">Reviews</h1>
        <img
          className="image1"
          src={reviewsList[Inccount].imgUrl}
          alt={reviewsList[Inccount].username}
        />
        <p className="p1">{reviewsList[Inccount].username}</p>
        <div className="arrows">
          <button className="leftArrow">
            <img
              className="leftarrow"
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              onClick={this.decrease}
            />
          </button>
          <button className="rightArrow">
            <img
              className="rightarrow"
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              onClick={this.Increase}
            />
          </button>
        </div>
        <p className="job">{reviewsList[Inccount].companyName}</p>
        <div className="content">
          <p className="description">{reviewsList[Inccount].description}</p>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
