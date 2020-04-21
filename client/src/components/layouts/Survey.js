import React from 'react'
import Button from '@material-ui/core/Button'
import { vanity, spiritual } from '../../assets/index'
/**
 * This component directs users to the survery page when button clicked.
 */
const styles = {
  text: {
    marginTop: '5%',
    marginBottom: '5%',
    textAlign: 'center',
    fontSize: '25px'
  },
  button: {
    paddingLeft: '50px'
  },
  image: {
    height: '400px',
    width: '400px',
    maxHeight: '100%',
    maxWdith: '100%',
    borderRadius: '15px',
    display: 'block'
  }
}

const Survey = () => {
  return (
    <div class='container'>
      <h5 style={styles.text}>
        Choose a category of internet to start your art work survey!
      </h5>
      <div class='row justify-content-center'>
        <div class='col-md-4'>
          <Button>
            <img src={spiritual} alt='my image' style={styles.image} />
          </Button>
        </div>

        <div class='col-md-4 offset-md-1'>
          <Button>
            <img src={vanity} alt='my image' style={styles.image} />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Survey
