import React from 'react'
import { Button } from 'semantic-ui-react'


const ButtonExampleButton = (props) => <Button onClick={props.func} primary>{props.text}</Button>

export default ButtonExampleButton