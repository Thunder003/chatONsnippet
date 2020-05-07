import React from 'react';


const Input=({searchchange})=>{
	return(
		<div>
		<input className='set ma3 pa3 br3 b--green bg-moon-gray font1 grow' type='number' placeholder='ENTER NUMBER OF CHAT BOX' onChange={e=>searchchange(e.target.value)} />
		</div>
		);
};
export default Input;

