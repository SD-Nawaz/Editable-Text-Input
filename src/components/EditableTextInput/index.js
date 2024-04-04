import {Component} from 'react'
import {
  EditableContainer,
  FormContainer,
  TextParagraph,
  TextInput,
  Heading,
  SaveButton,
  TextContainer,
} from './styledComponents'
class EditableTextInput extends Component {
  state = {
    textInput: '',
    isSaved: false,
  }
  onChangeTextInput = event => {
    this.setState({textInput: event.target.value})
  }

  onClickSave = () => {
    this.setState(prevState => ({isSaved: !prevState.isSaved}))
  }

  render() {
    const {textInput, isSaved} = this.state
    const buttonText = isSaved ? 'Edit' : 'Save'
    return (
      <EditableContainer>
        <FormContainer>
          <Heading>Editable Text Input</Heading>
          <TextContainer>
            {isSaved ? (
              <TextParagraph>{textInput}</TextParagraph>
            ) : (
              <TextInput
                value={textInput}
                type="text"
                onChange={this.onChangeTextInput}
              />
            )}
            <SaveButton type="button" onClick={this.onClickSave}>
              {buttonText}
            </SaveButton>
          </TextContainer>
        </FormContainer>
      </EditableContainer>
    )
  }
}

export default EditableTextInput
