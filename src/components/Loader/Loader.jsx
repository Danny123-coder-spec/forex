// import Spinner from 'react-bootstrap/Spinner';
import React, {useEffect, useState} from 'react'
import './Loader.css'

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=> {
    setTimeout(() => {
      setIsLoading(false);
      
    }, 5000);
  })
  return (
    <div>

    </div>
  )
}

export default Loader

