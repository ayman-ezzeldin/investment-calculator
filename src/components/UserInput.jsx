import React from 'react'
import { useState } from 'react'
const UserInput = ({handelChange,userInput}) => {
  return (
    <div id='user-input' >
        <div className="input-group">
          <p>
            <label htmlFor="initialInvestment">initialInvestment</label> {/* you should remember to make label as block */}
            <input type="number"  
            id='initialInvestment'
            required
            value={userInput.initialInvestment}
            onChange={(e)=> handelChange("initialInvestment",  e.target.value)}
            />
          </p>

          <p>
            <label htmlFor="annualInvestment">annualInvestment</label>
            <input type="number"  
            id='annualInvestment'
            required
            value={userInput.annualInvestment}
            onChange={(e)=> handelChange("annualInvestment",  e.target.value)}
            />
          </p>

          <p>
            <label htmlFor="expectedReturn">expectedReturn</label>
            <input type="number"  
            id='expectedReturn'
            required
            value={userInput.expectedReturn}
              onChange={(e)=> handelChange("expectedReturn",  e.target.value)}
            />
          </p>

          <p>
            <label htmlFor="duration">duration</label>
            <input type="number"  
            id='duration'
            required
            value={userInput.duration}
              onChange={(e)=> handelChange("duration",  e.target.value)}
            />
          </p>
        </div>
    </div>
  )
}

export default UserInput

