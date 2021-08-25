import React from 'react';
import { Dropdown } from 'react-bootstrap';
import '../Components/MemeGenerator.css';
import { useState } from 'react';

const MemeGenerator: React.FC = (props: any) => {

    const [tag1, setTag1] = useState('');
    //const [tag2, setTag2] = useState('');

    function vars() {
        console.log(tag1)
        //console.log(tag2)
    }

    return (
        <div id='firstDiv'>
            <img src={'https://memeapibucket.s3.us-east-2.amazonaws.com/Fun/5ducxx.jpg'} alt='Meme' />
            <Dropdown>
                <Dropdown.Toggle variant='secondary' id='dropDown1'>
                    Tag #1
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => setTag1('dark')}>Dark</Dropdown.Item>
                    <Dropdown.Item onClick={() => setTag1('cs')}>Computer Science</Dropdown.Item>
                    <Dropdown.Item onClick={() => setTag1('games')}>Games</Dropdown.Item>
                    <Dropdown.Item onClick={() => setTag1('fun')}>Fun</Dropdown.Item>
                </Dropdown.Menu>

                <Dropdown.Toggle variant='secondary' id='dropDown2'>
                    Tag #2
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => setTag1('dark')}>Dark</Dropdown.Item>
                    <Dropdown.Item onClick={() => setTag1('cs')}>Computer Science</Dropdown.Item>
                    <Dropdown.Item onClick={() => setTag1('games')}>Games</Dropdown.Item>
                    <Dropdown.Item onClick={() => setTag1('fun')}>Fun</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <button id='button' >Generate</button>

            <button id='button1' onClick={vars}>Vars</button>
        </div>
    )
}
export default MemeGenerator
