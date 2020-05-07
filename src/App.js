import React, {Component} from 'react';
import Input from './Input';
import Snippet from './Snippet';
import Audio from './Audio';

// import { Text, View, StyleSheet, Button } from 'react-native';
// import Constants from 'expo-constants';
// import * as Speech from 'expo-speech';


class App extends Component{
  constructor(){  
    super()
    this.state={
      ab:{
        va:'',
        i:-1
      },
      converbot:[],
      converuser:[],
      val:0,
      textval:'',
      appear:[],
      value:'',
      setValue:''
    }
  } 

    onSearch=(event)=>{
    this.setState({val:Number(event)},()=> {
      var abc= new Array(this.state.val);
          var assigntoappear=[]
      for(var i=0;i<this.state.val;i++)
          {
          const obj={
            va:'',
            i:i
          }
            abc[i]=obj;
            assigntoappear.push(1);
          }
       this.setState({
            converuser:abc
          },()=>{ 
              console.log(this.state.converuser)
          })
       this.setState({
            converbot:abc
          },()=>{ 
              console.log(this.state.converbot)
            
          })
       this .setState({
        appear:assigntoappear
       })
        console.log(this.state.appear);
       });
     }

  addtextbot=(value,id)=>{
    var obj={
      va:value,
      i:id
    }
     const items = [...this.state.converbot];
      const item = {...items[id]};
        item.va = value;
        item.i = id;
         items[id] = item;
      this.setState({
      converbot: items
    })
  }

   addtextuser=(value,id)=>{
     const items = [...this.state.converuser];
      let item = {...items[id]};
        item.va = value;
        item.i = id;
         items[id] = item;
      this.setState({
      converuser: items
    })
  }

  stringmaker=()=>{
    console.log(this.state.textval);
    var i=0;
    var str='';
    const itemuser = [...this.state.converuser];
    const itembot = [...this.state.converbot];
    while(i<this.state.val)    
    {
      if(typeof itemuser[i] !== 'undefined')
          {
            if(itemuser[i].va !=='')
            {str=str+" Customer:- ";
            str=str+itemuser[i].va;
             str=str+";";
            }
           }
      if(typeof itembot[i] !== 'undefined')
      {
        if(itembot[i].va !==''){
        str=str+" Bot:- ";
        str=str+itembot[i].va;
        str=str+",";
        }
        }
        i++;
    }
    console.log('string is ');
    console.log(str);
    this.setState({
      textval:str
    },()=>{console.log(this.state.textval)});

  }
   download=()=>{
         var data = this.state.textval;
          var fileDownload = require('react-file-download');
          fileDownload(data, 'Chat.json');
          console.log(data);
    }

    delete=(val)=>{
      const c=this.state.converuser.length;
      const filteredItemsuser= this.state.converuser.filter(item =>
      item.i!=Number(val));
      const c1=filteredItemsuser.length;
      const filteredItemsbot= this.state.converbot.filter(item =>
      item.i!=Number(val));
      if(c!==c1)
      {
          this.setState({
                        converuser: filteredItemsuser,
                        converbot: filteredItemsbot
                        },()=>{
                          console.log('as');
                          const items = [...this.state.appear];
                          let item = {...items[Number(val)]};
                             items[Number(val)] = 0;
                             this.setState({
                                appear:items
                             })
                             this.stringmaker();
                }
            )
        }
      }

    render(){
      const myHookValue = this.props.myHookValue;
      return(

    <div className='tc'>
    <h1 className='jumbotron jumbotron-fluid font mt0'>CHAT WITH BOT!!</h1>
    <div className='form pa2 br4 center'>
    <Input searchchange={this.onSearch}/>
    </div>
    <div  style={{display:'inline'}}>
    <button className="white b ma3 pv2 ph3 bg-gray hover-bg-mid-gray bn br-pill grow font2" type="submit" onClick={this.stringmaker}> CLICK TO SET TEXT FINAL</button>
     <button className="white b pv2 ph3 bg-gray hover-bg-mid-gray bn br-pill grow font2" onClick={this.download}>DOWNLOAD TRANSCRIPT</button>
    </div>
    <Snippet count={this.state.val} bot={this.addtextbot} user={this.addtextuser} del={this.delete} filterarray={this.state.appear}/>
    </div>
    );  
    
  } 
}

export default App;