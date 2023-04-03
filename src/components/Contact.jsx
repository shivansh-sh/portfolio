import React, { useState } from 'react'
import '../styles/contact.scss'
import toast from 'react-hot-toast'
import {addDoc, collection} from 'firebase/firestore'
import {db} from '../firebase'
const Contact = () => {


    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [disableBtn, setDisableBtn] = useState(false)


    const submitHandler = async(e)=>{
        e.preventDefault()
        setDisableBtn(true)

        try {
            await addDoc(collection(db, "contacts"),{
                name, email, message
            })
            setName("")
            setEmail("")
            setMessage("")

            toast.success('Message sent')
            setDisableBtn(false)
        } catch (error) {
            toast.error('Error')
            console.log(error)
            setDisableBtn(false)

        }



    }
  return (
    <div  id='contact' >
        <section>
            <form onSubmit={submitHandler} >
               <h2>Contact Me📲</h2>
               <input type="text" value={name} 
               onChange={(e)=>setName(e.target.value)} 
               placeholder='your name*' />

               <input type="email" value={email} onChange={(e) =>setEmail(e.target.value)} placeholder='your email*' />

               <input type="text" value={message} onChange={(e)=>setMessage(e.target.value)} placeholder='your message*' />
               <button disabled={disableBtn} className={disableBtn? "disableBtn" : ""} type='submit'>Send</button>

            </form>
        </section>
        <aside>
            <img src="https://images.pexels.com/photos/1416530/pexels-photo-1416530.jpeg?auto=compress&cs=tinysrgb&w=600" alt="contactpic" />
        </aside>
        </div>
  )
}

export default Contact