import React from 'react'

export const LoadingCard = () => {
  return (
    <div className='card text-bg-dark col mb-4' >
      <div className="card-body text-white">
        <p className="card-text placeholder-glow">
          <span className="placeholder col-2"></span>
        </p>
        <p className="card-text placeholder-glow">
          <span className="placeholder col-5"></span>
        </p>
        <div className="d-flex justify-content-center">
          <div className="spinner-border mt-5 mb-5" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    </div>
  )
}
