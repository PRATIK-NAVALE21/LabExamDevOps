import { useState } from 'react'


function App() {
  

  return (
   <>
   <h2>Sign Up</h2>
   <form method='#'>
      <input placeholder='Enter the Username ' type='text' required/>
      <br/>
      <br/>
      <input placeholder='Enter the Email ' type='email' required />
      <br/>
      <br/>
      <input placeholder='Enter the Password ' type='password' required/>
      <br/>
      <br/> 
      <button  type='submit'>Sign Up</button>
   </form>
   </>
  )
}

export default App
