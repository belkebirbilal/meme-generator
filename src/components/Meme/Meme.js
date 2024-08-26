import React from 'react';
import "./Meme.css";

function Meme() {
    return (
        <form>
            <span>
                <label for="">top text</label>
                <input type='text' id="top-text" />
            </span>
            <span>
                <label for="bottom-text">bottom text</label>
                <input type='text' id='bottom=text' />
            </span>
        </form>
    )
}

export default Meme;