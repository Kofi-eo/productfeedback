import React from 'react';
import {AiFillPlusCircle} from 'react-icons/fa';



const NewFeedback = ()=>{
    return (
        
        <div className = "flex justify-center items-center ">
            <div>Go back </div>
            <div className = "w-95 p-6">
                <AiFillPlusCircle />
                <h2>Create New Feedback</h2>
                <hr className = "mt-3" />
                <h4>Feedback Title</h4>
                <p> Add a short, descriptive headline</p> 
                <div>
                    <label for = 'title'></label>
                    <input type = 'text' id = 'title' />
                </div>

                <div>

                </div>
            </div>

          

           
            
        </div>
    )
}


export default NewFeedback;