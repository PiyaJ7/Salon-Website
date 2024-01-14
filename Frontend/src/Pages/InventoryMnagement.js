import React from 'react';
import './inventoryMnagement.css';
import { TiThMenu } from "react-icons/ti";
import Header from '../Components/Header';

export default function InventoryMnagement() {
  return (
    <div>
        <Header />
        <div className="inventoryManagement">
            <div className="inventoryManagement-header">
                <div className="inventoryManagement-header-left">
                    <TiThMenu size={29} className='menu-icon'/>
                    <h1>Inventory Management</h1>
                </div>
                <div className="inventoryManagement-header-right">
                    <button className='add-new-product-button'>Add new product</button>
                    <button className='report-button'>Report</button>
                </div>
            </div>
            <div className="inventoryManagement-body">
                <div className="sort-button">
                    <button className='sort-by-type'>Sort by type</button>
                    <button className='sort-by-price'>Sort by price</button>
                </div>
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Category</th>
                        <th>Date</th>
                        <th>Remaining qty</th>
                        <th>Used qty</th>
                        <th>Total Price</th>
                        <th>Action</th>
                    </tr>
                </table>            
            </div>
        </div>
    </div>
  )
}
