import React from 'react'
import { Link } from 'react-router-dom';



function Home() {

  return (
    <div className="hero min-h-screen bg-base-200 bg-[url('assets/hero3.jpg')]">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-4xl font-bold text-balanced">Well Come To  Kal Gift Shoping center</h1>
          <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <Link to="/login" className="btn btn-outline btn-primary">Login</Link>
        </div>
      </div>
    </div>
  )
}

export default Home