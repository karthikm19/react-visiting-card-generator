import React from 'react'
import "./VisitingCard.css"

const VisitingCard = (profile) => {
  return (
    <div className="visiting-card">
        <div className='card-header'>
            <div>
                <img src={profile.image} style={{ height: '100px' }}/>
            </div>
            <div className='right'>
                <h2>{profile.name}</h2>
                <h6>{profile.title}</h6>
                <h6>{profile.company}</h6>
            </div>
        </div>
        <div className='description'>
            { profile.intro }
        </div>
    </div>
  )
}

export default VisitingCard
