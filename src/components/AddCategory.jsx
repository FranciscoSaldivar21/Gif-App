import React, { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {

const [inputValue, setInputValue] = useState('');

const onInputChange = ({target}) => {
    setInputValue(target.value);
}

const onSubmit = (event) =>{
    event.preventDefault();

    const newValue = inputValue.trim();

    if(newValue.length <= 1) return;

    onNewCategory( newValue );
    setInputValue('');
}

  return (
    <form onSubmit={ (event) => onSubmit(event)}>
        <input
            type='text'
            placeholder='Bucar gift'
            value={ inputValue }
            onChange={ (event) => onInputChange(event)}
            // onChange={ onInputChange }

        />
    </form>
  )
}
