import React from 'react';
import Data from "../MemeData"
import "./Meme.css";



function Meme() {
    const [url , setUrl] = React.useState('')
    function handleClick() {
        const random = Math.floor(Math.random() * Data.data.memes.length)
        setUrl(Data.data.memes[random].url)
    }
    return (
        <div className='container'>
            <div className='cont'>
                <div>
                    <label htmlFor="top-text">top text</label><br />
                    <input type='text' id="top-text" />
                </div>
                <div>
                    <label htmlFor="bottom-text">bottom text</label><br />
                    <input type='text' id='bottom-text' />
                </div>
            </div>
            <button onClick={handleClick} id="button">git a new meme image</button>
            <div className='img-container'>
                <img src={url} alt="meme" />
            </div>
        </div>
    )
}

export default Meme;