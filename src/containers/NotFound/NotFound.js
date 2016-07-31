import React from 'react';

export default function NotFound() {
  return (
    <div className="container text-center" style={{marginTop: '80px'}}>
      <a href="https://www.atmed.co">
        <img src="http://res.cloudinary.com/atmed/image/upload/atmed_logo" alt="Atmed Logo"
             style={{margin: '0 auto', display: 'block', width: '200px'}}/>
      </a>
      <h1 style={{marginTop: '30px'}}>404</h1>
      <p>Page not found</p>
    </div>
  );
}
