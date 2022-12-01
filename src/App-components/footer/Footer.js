import React from 'react';
import './Footer.css'

export default function Footer() {
  return (
    
      <div class="footer">
        &copy; {new Date().getFullYear()} WebDeveloper:{' '}
        <a href='https://moises-gonzalez.com/' target="_blank" rel="noopener noreferrer">
          Moises-Gonzalez.com
        </a>
      </div>
  );
}