import React from 'react'

import { InputContainer } from './styles';

const Input = ({value, onChnage}) => {
  return (
    <InputContainer>
    <input value={value} onChange={onChnage}/>
    </InputContainer>
  )
}

export default Input;