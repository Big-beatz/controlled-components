import React from 'react';
import './App.css';

function App() {
    const [nameValue, setNameValue] = React.useState("")
    const [ageValue, setAgeValue] = React.useState(0)
    const [remarks, setRemarks] = React.useState('')
    const [newsletter, toggleNewsletter] = React.useState(false)
    const [submit, toggleSubmit] = React.useState(false)

    function handleSubmit(event){
        console.log(nameValue, ageValue, remarks, newsletter)
        toggleSubmit(!submit)

        event.preventDefault()
    }
    // function handleChange(e){
    //     setState({nameValue: e.target.value})
    // }
    // const [state, setState] = React.useState({
    // nameValue: ""
// })

    // console.log(state.nameValue)

    return (
    <div>
        <form className="formulier"
        onSubmit={handleSubmit}>
          <fieldset>
              <legend>Gegevens</legend>
              <div>
              <label htmlFor="name">Naam: </label>
              <input
                  type="text"
                  name="name"
                  value={nameValue}
                  onChange={(e) => setNameValue(e.target.value)}
              />
              <br/>
              <br/>
              <label htmlFor="age">Leeftijd: </label>
              <input
                  type="number"
                  name="age"
                  min="0"
                  max="99"
                  value={ageValue}
                  onChange={(e) => setAgeValue(e.target.value)}
              />
              </div>
          </fieldset>
            <fieldset>
                <legend>Jouw Review</legend>
                <div>
                <label htmlFor="reviewText">Opmerkingen:</label>
                    <br/>
                <textarea
                    name="reviewText"
                    id="reviewText"
                    cols="30"
                    rows="10"
                    placeholder="Wat vond je van het recept?"
                    value={remarks}
                    onChange={(e) => setRemarks(e.target.value)}
                />
                <br/>
                <br/>
                <input
                    type="checkbox"
                    name="keepMeUpdated"
                    className="keepMeUdated"
                    checked={newsletter}
                    onChange={() => toggleNewsletter(!newsletter)}
                />
                <label htmlFor="keepMeUpdated">
                    Ik schrijf me in voor de nieuwsbrief
                </label>
                <br/>
                <br/>
                <button type="submit"
                >
                    Versturen
                </button>
                </div>
            </fieldset>
        </form>
    </div>

  );
}

export default App;
