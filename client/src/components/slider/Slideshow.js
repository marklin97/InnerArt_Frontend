import React from 'react'
import { Slide } from 'react-slideshow-image'
import { sampleImage1, sampleImage2, sampleImage3 } from '../../assets/index'

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: false,
  pauseOnHover: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`)
  }
}

const quote =
  '  Inner art inner soul is a platform in which you get in contact with a graphic designer and could start creating your own design!'

const style = {
  size: {
    width: '30%',
    height: '30%',
    marginRight: 'auto',
    marginLeft: 'auto'
  },
  quote: {
    paddingTop: '80%',
    color: 'white',
    bottom: '200',
    fontSize: '1.5vw'
  },
  button: {
    height: '30%',
    borderRadius: '25px',
    border: 'none',

    backgroundColor: 'black',
    margin: 'auto',
    display: 'block',
    color: 'white',
    fontSize: '1vw'
  }
}

const Slideshow = () => {
  return (
    <div className='slide-container'>
      <Slide {...properties}>
        <div className='each-slide'>
          <div
            style={{
              height: 600,
              backgroundImage: 'url(' + sampleImage1 + ')'
            }}
          >
            <div style={style.size}>
              <p style={style.quote}>{quote}</p>
              <br />
              <button style={style.button}>START CREATING</button>
            </div>
          </div>
        </div>

        <div className='each-slide'>
          <div
            style={{
              height: 600,
              backgroundImage: 'url(' + sampleImage2 + ')'
            }}
          >
            <div style={style.size}>
              <h5 style={style.quote}>{quote}</h5>
              <br />
              <button style={style.button}>START CREATING</button>
            </div>
          </div>
        </div>

        <div className='each-slide'>
          <div
            style={{
              height: 600,
              backgroundImage: 'url(' + sampleImage3 + ')'
            }}
          >
            <div style={style.size}>
              <h5 style={style.quote}>{quote}</h5>
              <br />
              <button style={style.button}>START CREATING</button>
            </div>
          </div>
        </div>
      </Slide>
    </div>
  )
}
export default Slideshow
