import React from 'react'
import './detail.css'
import { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { action } from '../state';


const Detail = (props) => {

  const dispatch = useDispatch()
  const [data, setData] = useState({});
  const apiUrl = `https://flipkart-email-mock.now.sh/?id=${props.id}`;

  async function fetchData() {
      const response = await fetch(apiUrl);
      const responseData = await response.json();
      console.log(responseData)
      setData(responseData)

  }
  useEffect(() => {
      fetchData();
  }, [])






  return (

    <section className='main'>

      <section>
        <nav className='topbar'>
            <p className='logo'>{props.name.charAt(0).toUpperCase()}</p>

            <p className='name'>{props.name}<br />{props.date}</p>
            <button className='fav-btn' onClick={()=>(dispatch(action.MarkFav(data.id))) }>Mark as favourite</button>
        </nav>

        <p className='description'>{data.body}</p>
      </section>
    </section>
  )
}

export default Detail