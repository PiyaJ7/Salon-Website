import React from 'react';
import './supplierDetails.css';
import { TiThMenu } from "react-icons/ti";
import Header from '../Components/Header';

export default function SupplierDetails() {
  return (
    <div>
        <Header />
        <div className="supplierDetails">
            <div className="supplierDetails-header">
                <div className="supplierDetails-header-left">
                    <TiThMenu size={29} className='menu-icon'/>
                    <h1>Supplier Details</h1>
                </div>
                <div className="supplierDetails-header-right">
                    <button className='add-new-supplier-button'>Add new supplier</button>
                    <button className='download-supplier-list-button'>Download supplier list</button>
                </div>
            </div>
            <div className="supplierDetails-body">
                <div className="sort-button">
                    <button className='sort-by-type'>Sort by type</button>
                    <button className='sort-by-price'>Sort by price</button>
                </div>
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Product</th>
                        <th>Contact</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Date</th>
                        <th>Qty</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </table>            
            </div>
        </div>
    </div>
  )
}
