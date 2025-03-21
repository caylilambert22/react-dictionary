
import React, {useState} from 'react';
import './WordForm.css';

function WordForm({addWord}) {
  const handleSubmit= (e) => {
    e.preventDefault(); //to keep it from reloading page

    const enField = document.querySelector('[name=en]');
    const deField = document.querySelector('[name=de]');

    const enValue = enField.value;
    const deValue = deField.value;

    enField.value= '';
    deField.value='';

    addWord(enValue,deValue);


  }
  return (
    <section className="card-form">
      <h2>New Card</h2>
    <form action="#" method="GET" onSubmit={handleSubmit}>
    <div className='form-row'>
      <label>
        English:
        <input type="text" name="en" placeholder="english"></input>
      </label>
    </div>
    <div className='form-row'>
      <label>
        German:
        <input type="text" name="de" placeholder="german"></input>
      </label>
    </div>
    <div className="form-row">
      <button type="submit">Add Word</button>
    </div>
  </form>
  </section>
  )
}

export default WordForm;