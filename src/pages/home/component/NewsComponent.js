import React from 'react'
import '../css/NewsComponent.css'
import { useState,useEffect } from 'react';
import NewsModal from './NewsModal';
import axios from 'axios';

const NewsComponent = () => {
    const[showModal,setShowModal] = useState(false);
    const[activeNews,setActiveNews] = useState(null)
    const[news,setNews] = useState([])

    const diplaymodal =(props)=> {
        setShowModal(true)
    }
    const closeModal = ()=>{
        setShowModal(false);
    }

    useEffect(() => {
        axios.get("http://localhost:8080/viewAllNews")
        .then((response)=>{
            console.log("here")
            setNews(response.data)
        })
        .catch((e)=>{
            console.log(e)
        })
    }, []);



  return (
    <div className='newsCard-box gap '>
        {news.map((news) => {
            return (
        <div>
            <div className="news center">
                <div className="news-details flex-col">
                    <p className="news-title">{news.title}</p>
                    <p className="news-text">Date: {news.date}</p>
                    <button className="news-button" onClick={diplaymodal}>More info</button>
                {showModal && <NewsModal onClick={closeModal}/>}
                </div>
                
            </div>
        </div>)
        })
    }
    </div>
  )
}

export default NewsComponent