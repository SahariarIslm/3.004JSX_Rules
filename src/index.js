import React from 'react'
import ReactDOM from 'react-dom';

// JSX Rules
// return single element
// div/section/article or Fregment
// use camelCase for html element 
// className instead of class 
// close every element 
// formatting 

function Greeting(){
    return (
        <div className=''>
            <h1>hello world</h1>
            <ul>
                <li>
                    <a href="#">Hello World </a>
                </li>
            </ul>
        </div>
    );
}

ReactDOM.render(<Greeting/>,document.getElementById('root'));
 