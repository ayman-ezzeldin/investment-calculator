import React, { useState } from 'react'
import Header from './components/Header'
import UserInput from './components/UserInput'
import Result from './components/Result'
const App = () => {
  const [userInput , setUserInput] = useState({
    initialInvestment : 2 ,
    annualInvestment : 19 ,
    expectedReturn : 39 ,
    duration : 5 ,
  })
  const inputIsValid = userInput.duration >=1 && userInput.initialInvestment >= 0 && userInput.annualInvestment >= 0 && userInput.expectedReturn >= 0 ;
  function handelChange(identifier,newValue) {
    return (
      setUserInput((prev)=> {
        return {
          ...prev ,
          [identifier] : +newValue , // [ ], you're telling JavaScript to use the value of identifier as the key for the property being updated in the new object, thus achieving dynamic property assignment.
          // take care of the ( + ) cause it get rid of the error of concatenate string with number => you can see it in the consol .
        }
      })
    )
  }

  return (
    <>
      <Header />
      <UserInput handelChange={handelChange} userInput={userInput} />
      { !inputIsValid && <p className='center' >Please Make the Duration greater than this !</p>}
      { inputIsValid && <Result input={userInput} />}
    </>
  )
}

export default App