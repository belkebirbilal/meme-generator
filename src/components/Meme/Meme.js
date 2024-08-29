import React from 'react';
import Data from "../MemeData"
import "./Meme.css";



function Meme() {
    const [url , setUrl] = React.useState('https://i.imgflip.com/25w3.jpg')
    const [text , setText] = React.useState({
        top_text: "",
        bottom_text: ""
    })
    function handleClick() {
        const random = Math.floor(Math.random() * Data.data.memes.length)
        setUrl(Data.data.memes[random].url)
    }
    function handleChange(event) {
        const { name , value } = event.target
        setText(prevText => {
            return {
                ...prevText,
                [name]: value
            }
        })
    }
    return (
        <div className='container'>
            <div className='cont'>
                <div>
                    <label htmlFor="top-text">top text</label><br />
                    <input type='text' id="top-text" onChange={handleChange} value={text.top_text} name="top_text" />
                </div>
                <div>
                    <label htmlFor="bottom-text">bottom text</label><br />
                    <input type='text' id='bottom-text' onChange={handleChange} value={text.bottom_text} name="bottom_text"/>
                </div>
            </div>
            <button onClick={handleClick} id="button">git a new meme image</button>
            <div className='img-container'>
                <div className='text'>
                    <h1 className='top-text'>{text.top_text}</h1>
                    <h1 className='bottom-text'>{text.bottom_text}</h1>
                </div>
                <img src={url} alt="meme" />
            </div>
        </div>
    )
}

export default Meme;