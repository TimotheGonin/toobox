/**
  * @author Timothé Gonin
  * Licence
  * Premier composant pure react
*/
import React from 'react';
import '../styles/PureCompo.css'

export function PureCompo(){
  return(
    <div>
      <h6 className='pure-h6'>Pure compo</h6>
    </div>
  )
}
export function PureCompoProps({label,age}){
  return(
    <div>
      <h6 className='pureprops-h6'>Pure compo props {label} {age}</h6>
    </div>
  )
}
// export default PureCompo