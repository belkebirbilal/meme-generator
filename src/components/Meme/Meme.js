import React from 'react';
import "./Meme.css";

function Meme() {
    return (
        <div className='container'>
            <div className='cont'>
                <div>
                    <label for="">top text</label><br />
                    <input type='text' id="top-text" />
                </div>
                <div>
                    <label for="bottom-text">bottom text</label><br />
                    <input type='text' id='bottom-text' />
                </div>
            </div>
            <button id="button">git a new meme image</button>
        </div>
    )
}

export default Meme;