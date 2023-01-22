import React , {useRef , useState} from 'react';
import emailjs from '@emailjs/browser';
import {toast} from 'react-toastify';
import './style.css';

function Contact() {
    const form = useRef();
    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    const [message , setMessage] = useState('');
    const userRef = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_5g9tkjx', 'template_auyafh9', form.current, '1gOlhc1tH4ZrzrUEi')
        .then((result) => {
            toast.success(` The message has been send successfully` , {
                position:'top-center',
                autoClose: 500
            });
        }, (error) => {
            toast.error('error' , {
                position:'top-center',
                autoClose: 500
            });
        }).then(() => {
            setName('');
            setEmail('');
            setMessage('');
        })
        
    };
    return (
        <div className='contact' id='contact'>
            <div className='main-title'>
                <h2>Contact Me</h2>
                <p>Lets Keep In Touch</p>
                <span className="rounded-circle d-block"> <span className="rounded-circle d-block"></span> </span>
            </div>
            <div className='contact-content '>
                <div className='container'>
                    <div className='row'>
                        <div className='contact-img col-12 col-md'>
                            <div>
                                <h2 >Get In Touch <span className='animate__slow animate__animated animate__flash animate__infinite	infinite'>|</span></h2>
                                <p>Send Your Email Here !</p>
                            </div>
                            <img className='img-fluid' src='/images/mailz.d13d5e32.jpeg' alt='contact-img'/>
                        </div>
                        <form className='contact-info col-12 col-md' ref={form} onSubmit={sendEmail}>
                            <div className='row'>
                                <div className='form-item col-12 col-md'>
                                    <input ref={userRef} onChange={(e) => setName(e.target.value)} type='text' value={name} placeholder='Enter Your Name' name='user_name' required/>
                                </div>
                                <div className='col-12 col-md'>
                                    <input onChange={(e) => setEmail(e.target.value)} type='email' value={email} placeholder='Enter Your Mail' name='user_email' required/>
                                </div>
                            </div>
                            <textarea onChange={(e) => setMessage(e.target.value)} className='message-box' value={message} placeholder="Write your Message here..." name='message' required></textarea>
                            <button value='send'>Send</button>
                        </form> 
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact;