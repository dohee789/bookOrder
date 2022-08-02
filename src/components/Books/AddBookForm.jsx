import React, { useState, useRef } from 'react'
import Button from '../Commons/Button'
import Input from '../Commons/Input';
import classes from './AddBookForm.module.css'
import _uniqueId from 'lodash/uniqueId';

const AddBookForm = (props) => {

    const [id] = useState(_uniqueId('prefix-'));

    const inputRef = useRef();

    const submitHandler = (event) => {
      event.preventDefault();
      const amountValue = inputRef.current.value;
      //console.log(inputRef.current.value);
      const amountValueToNumber = +amountValue;

      props.onAddToCart(amountValueToNumber);
    };

  return (
    <form className={classes.form}>
        <Input ref={inputRef} label='amount' input={ {id: id, type: 'number', defaultValue: '1'} }/>
        <Button type="submit" onClick={submitHandler}>Add</Button>
    </form>
  )
}

export default AddBookForm