import React from 'react';
import '../Stylesheet/Button.css';
import { Link } from 'react-router-dom';

export function Button() {
  return (
    <Link to='sign-up'>
      <button className='btn'>Sign Up/Login</button>
    </Link>
  );
}
