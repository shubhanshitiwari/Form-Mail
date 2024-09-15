import React from 'react'
import "./Contact.css"
import Swal from 'sweetalert2'

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "2d8205f4-e036-4d75-a67b-01b69870b481");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            Swal.fire({
                title: "Successful!",
                text: "Feedback submitted!",
                icon: "success"
              });
        }
      };




  return (
    <section className='contact'>
        <form onSubmit={(onSubmit)}>
            <h2>Feedback Form</h2>
            <div className='input-box'>
                <label>Full Name*</label>
                <input type="text" className='field' placeholder='Enter your name' name='name' required/>
            </div>
            <div className='input-box'>
                <label>Email Address*</label>
                <input type="email" className='field' placeholder='Enter your email' name='email' required />
            </div>
            <div className='input-box'>
                <label>Suggestions*</label>
                <textarea name="message" id="" placeholder='Any Suggestion' required className='field mess'></textarea>
            </div>
            <button className='btn' type='submit'>Submit</button>
        </form>
    </section>
  )
}

export default Contact

