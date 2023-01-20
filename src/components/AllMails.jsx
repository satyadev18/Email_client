import React, { useEffect } from 'react'
import { useState } from 'react';
import Detail from './Detail/Detail';
import { useDispatch, useSelector } from 'react-redux';
import {action} from './state'


const AllMails = () => {

    const [adetail, setAdetail] = useState(null);

    const [mails, setMails] = useState([]);
    const [mailStyle,setMailStyle] = useState('mail-item');
    const dispatch = useDispatch();



    //Fetching Data from API link.

    const apiUrl = `https://flipkart-email-mock.now.sh/`;

    async function fetchData() {
        const response = await fetch(apiUrl);
        const responseData = await response.json();

        console.log(responseData.list)
        setMails(responseData.list)
    }

     useEffect(() => {
        fetchData();
    }, []);



    const handleClick = (e, id) => {
        setAdetail(e)
        setMailStyle('split-mail-item')
        dispatch(action.MarkRead(id))
        // setIndItem(id)
    };

let fav = useSelector(state => state.fav);


var set = new Set(fav)

console.log(set)




function dateFormat(d) {
   let str = [(d.getMonth()+1),
            d.getDate(),
            d.getFullYear()].join('/')
            + ' ' + [ d.getHours(),
            d.getMinutes(),
            d.getSeconds()].join(':');

 return str

}








return (
        <>
            <main>
                {mails.map((m) => (
                    <section >

                    <section className={mailStyle} tabIndex='1' key={m._id} onClick={() => handleClick(m,m.id)}>
                       <section id='logo-id'>

                       <section >
                       <p className='logo' id='logo-id'>{m.from.name.charAt(0).toUpperCase()}</p>

                       </section>
                       <section>
                       <p className='mail-from'>From : <b>{m.from.name}   {m.from.email}</b></p>
                        <p className='mail-subject'>Subject : <b>{m.subject}</b></p>
                        <br />
                        <p className='mail-desc'>{m.short_description}</p>
                        <p className='email-date'>{dateFormat(new Date(m.date))}</p>
                        {set.has(m.id) &&
                        <p className='favourite'>Faouvrite</p>}
                        </section>
                        </section>

                    </section>

                    {adetail === m ? <Detail  m={m} id={m.id} name={m.from.name} date={dateFormat(new Date(m.date))}/>: null}
                    </section>

                ))}

                







            </main>



        </>
    )
}

export default AllMails