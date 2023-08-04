import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Header from './Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import Picture from './Picture'

function FaderButton() {
  const [buttonOneCount, setButtonOneCount] = useState(0)
  const [buttonTwoCount, setButtonTwoCount] = useState(0)
  const [showHorsePhoto, setShowHorsePhoto] = useState('')
  const [showRoadPhoto, setShowRoadPhoto] = useState('')
  const [threshold, setThreshold] = useState(10)
  console.log(threshold)

  const thresholdInput = (e) => {
    const thresholdValue = e.target.value.toLocaleLowerCase()
    setThreshold({ thresholdValue })
  }

  const buttonOneHandler = (buttonOneCount) => {
    setButtonOneCount(buttonOneCount + 1)

    if (buttonOneCount === threshold - 1) {
      setShowHorsePhoto('showHorse')
    }
  }

  const buttonTwoHandler = (buttonTwoCount) => {
    setButtonTwoCount(buttonTwoCount + 1)

    if (buttonTwoCount === threshold - 1) {
      setShowRoadPhoto('showRoad')
    }
  }

  return (
    <>
      <div className="header">
        <Header
          buttonOneCount={buttonOneCount}
          buttonTwoCount={buttonTwoCount}
        />
      </div>

      <div>
        <InputGroup className="mb-3" onChange={(e) => thresholdInput(e)}>
          <InputGroup.Text id="basic-addon1">Set Threshold</InputGroup.Text>
          <Form.Control
            defaultValue={threshold}
            aria-label="Threshold"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
      </div>

      <div className="container">
        <div className="buttons">
          <Button
            onClick={(e) => buttonOneHandler(buttonOneCount)}
            variant="primary"
          >
            Click Me
          </Button>

          <Button
            onClick={(e) => buttonTwoHandler(buttonTwoCount)}
            variant="primary"
          >
            Click Me
          </Button>
        </div>
      </div>
      <div>
        <Picture
          showHorsePhoto={showHorsePhoto}
          showRoadPhoto={showRoadPhoto}
        />
      </div>
    </>
  )
}

export default FaderButton
