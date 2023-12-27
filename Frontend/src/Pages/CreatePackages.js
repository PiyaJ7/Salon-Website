import React from 'react'
import './createPackages.css';
import close from './images/close.png';
import { Link } from 'react-router-dom';

export default function CreatePackages() {
  return (
    <div className="createPackage-page">
            <div className="createPackage-container">                
                <form action="">
                  <button className='close-button'><img className='close-icon' src={close}/></button>
                  <h1>Create New Package</h1>

                  <div className="input-box">                    
                    <input type="text" id="packagetitle" name="packagetitle" required/>
                    <label for="packagetitle">Title of the new package</label>
                  </div>

                  <div className="select-box">
                    <select>
                        <option value="0">Select Package type</option>
                        <option value="1">Daily Package</option>
                        <option value="2">Event Package</option>
                        <option value="3">Seasonal Package</option>
                    </select>
                  </div>

                  <div className="input-box">
                    <input type="text" id="description" name="description" required/>
                    <label for="description">Description</label>                  
                  </div>

                  <div className="input-box">
                    <input type="text" id="price" name="price" required/>
                    <label for="price">Price (LKR)</label>
                  </div>

                  <button type='submit' className='createPackage-button'>Create Package</button>
                </form>                
            </div>
        </div>
  )
}
