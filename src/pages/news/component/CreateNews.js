import React from 'react'
import '../css/CreateNews.css'
import Button from '../../../reusable/Button'
import axios from 'axios'
import { useState,useEffect } from 'react'


const CreateNews = () => {

  const[news1,setNews1] = useState({
    title:"",
    date:"",
    news:""
    
  })

  const changeHandler = (event) =>{
    const name = event.target.name
    const value = event.target.value
    const temptNews1 = {...news1}
    temptNews1[name] = value
    setNews1(temptNews1)
  }

  const sumbitHandler = () => {
    axios.post('http://localhost:8080/createNews', news1)
    .then((response) => {
      
      }).catch((e) => {
      console.log(e)
    })
  }



  return (
    <div className='news-box flex-col center gap'>
        <h2 className='title-news-box center'> News</h2>
        <div className='flex-col detail-news gap'>
            <label><strong>Title:</strong></label>
            <input className='news-input2' type='text' onChange={changeHandler} name='title' value={news1.title}/>
            <label><strong>Date:</strong></label>
            <input className='news-input2' type="date" onChange={changeHandler} name='date' value={news1.date}/>
            <label><strong>News:</strong></label>
            <textarea className='news-input1' onChange={changeHandler} name='news' value={news1.news} />
            <Button className={'button-1 center '} type="submit" text={'+ Create News'} onClick={sumbitHandler} />
        </div>
        
        
    </div>
  )
}

export default CreateNews