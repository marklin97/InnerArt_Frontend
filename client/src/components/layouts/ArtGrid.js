import React from 'react'
import Button from '@material-ui/core/Button'
import { sampleImage1, sampleImage2, sampleImage3 } from '../../assets/index'

const styles = {
  text: {
    marginTop: '3%',
    textAlign: 'center',
    fontSize: '25px'
  },
  mainImage: {
    marginTop: '3%',
    height: '500px',
    width: '500px',
    maxHeight: '100%',
    maxWdith: '100%',
    borderRadius: '25px'
  },
  subImage: {
    marginTop: '3%',
    height: '240px',
    width: '290px',
    maxHeight: '100%',
    maxWdith: '100%',
    borderRadius: '25px'
  }
}

/**
 * This component defines the layout of the Artgrid for home page, takes in five image items as the parameters
 */

const ArtGrid = () => {
  return (
    <div>
      <h4 style={styles.text}>Get inspired of other art works designs</h4>
      <div class='container'>
        <div class='row'>
          <Button>
            <img src={sampleImage3} alt='my image' style={styles.mainImage} />
          </Button>

          <div class='column'>
            <Button>
              <img src={sampleImage1} alt='my image' style={styles.subImage} />
            </Button>
            <Button>
              <img src={sampleImage2} alt='my image' style={styles.subImage} />
            </Button>

            <div class='w-100'></div>

            <Button>
              <img src={sampleImage3} alt='my image' style={styles.subImage} />
            </Button>

            <Button>
              <img src={sampleImage1} alt='my image' style={styles.subImage} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArtGrid
