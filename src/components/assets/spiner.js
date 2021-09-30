import React from 'react'

export default function spiner() {
    return (
        <div>
            <div className="spinner-grow text-danger mt-4 " role="status">
                <span className="visually-hidden">Loading...</span>
            </div> 
        </div>
    )
}
