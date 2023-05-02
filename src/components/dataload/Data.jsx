import React from "react";
import './data.css'

const Data=()=>{
    const news = require('../../../data/news.json')
    
    app.get('/news', (req,res)=>{
        res.send(news)
    })


    return (
        <div>
        </div>
    )

}

export default Data;