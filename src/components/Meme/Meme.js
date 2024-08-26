import React from 'react';
import "./Meme.css";

function Meme() {
    return (
        <form>
            <div className='cont'>
                <div>
                    <label for="">top text</label><br />
                    <input type='text' id="top-text" />
                </div>
                <div>
                    <label for="bottom-text">bottom text</label><br />
                    <input type='text' id='bottom=text' />
                </div>
            </div>
            <input type='submit' id="submit" value="git a new meme image" />
        </form>
    )
}

export default Meme;