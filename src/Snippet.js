import React from 'react';

const box=({count, bot, user,del,filterarray})=>
{	
	var ar=[];
for(var i=0;i<count;i++)
{
	if(filterarray[i]!=0)
	{
		ar.push(<div className='br4 pa3 ma2 grow' style={{border:'4px solid black', height: '120	px',display: 'inline-block'}}><input id={i} onChange={e=>bot(e.target.value, e.target.id)} className=' font2 bg-moon-gray  dib br4 pa3 ma2 grow bw20 shadow-5' type='search' placeholder='FOR BOT'/>
			<input className=' font2 bg-moon-gray  dib br4 pa3 ma2 grow bw20 shadow-5' id={i} onChange={e=>user(e.target.value, e.target.id)}  type='search' placeholder='FOR CUSTOMER' />
			<br></br>
			<button id={i} className="font2 white b ma3 pv2 ph3 bg-gray hover-bg-mid-gray bn br-pill grow" onClick={e=>del(e.target.id)}>DELETE!</button>
			</div>);
		}
}
	return(
		<div>
			{ar};
		</div>
		);
} 
export default box; 	