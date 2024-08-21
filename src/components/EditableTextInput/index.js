import {Component} from 'react'
import {
  Bgcon,
  HeadCon,
  Card,
  InputElement,
  SaveBtn,
  Heading,
  SavedText,
} from './StyledComponents'

class EditableTextInput extends Component {
  state = {userInput: '', save: false}

  onInputChange = event => {
    this.setState({userInput: event.target.value})
  }

  onClickSave = () => {
    const {save} = this.state
    this.setState({save: !save})
  }

  render() {
    const {userInput, save} = this.state
    return (
      <Bgcon>
        <Card>
          <Heading>Editable Text Input</Heading>
          <HeadCon>
            {save ? (
              <SavedText>{userInput}</SavedText>
            ) : (
              <InputElement
                value={userInput}
                onChange={this.onInputChange}
                type="text"
              />
            )}
            <SaveBtn onClick={this.onClickSave}>
              {save ? 'Edit' : 'Save'}
            </SaveBtn>
          </HeadCon>
        </Card>
      </Bgcon>
    )
  }
}

export default EditableTextInput
