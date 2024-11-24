// Import dependencies
import React from 'react'
import Swal from 'sweetalert2'

// Styles
import './css/Contact.css'

//Assets
import img1 from '../assets/football.jpg'

const Contact = () => {

  // Contact Form API
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "35b1fb60-95fe-4e98-86f0-e3c6e5aed24b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      Swal.fire({
        title: "Success!",
        text: "Message Sent Successfully!",
        icon: "success"
      });
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <>
      <div className='c-container'>
        <div className='c-content'>
          <div className='c-left'>
            <h1 className='c-title'>Let's <span className='c-talk'>Talk</span></h1>
            <p className='c-body'>If you would like to contact me about any projects or just reach out, enter your details below :)</p>

            <form className='c-form' onSubmit={onSubmit}>
              <div  className='c-input-box box1'>
                <svg fill="#726CA2" className='c-img' viewBox="0 0 64 64" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" stroke="#726CA2">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title></title><path d="M32,32.86a9.22,9.22,0,1,1,9.21-9.22A9.23,9.23,0,0,1,32,32.86Zm0-15.43a6.22,6.22,0,1,0,6.21,6.21A6.21,6.21,0,0,0,32,17.43Z"></path><path d="M32,56.64a24.68,24.68,0,0,1-15.22-5.27,1.52,1.52,0,0,1-.57-1.06c0-.16,0-.31,0-.47a15.8,15.8,0,1,1,31.6,0c0,.16,0,.31,0,.47a1.52,1.52,0,0,1-.57,1.06A24.68,24.68,0,0,1,32,56.64ZM19.21,49.45a21.62,21.62,0,0,0,25.58,0,12.8,12.8,0,0,0-25.58,0Zm27.08.74h0Z"></path><path d="M32,56.64a24.65,24.65,0,1,1,15.22-5.27A24.68,24.68,0,0,1,32,56.64Zm0-46.28A21.63,21.63,0,0,0,18.64,49a21.64,21.64,0,0,0,35-17A21.67,21.67,0,0,0,32,10.36Z"></path></g>
                </svg>
                <input placeholder='Enter your name' className='c-input' type='text' name='name' required></input>
              </div>
              <div  className='c-input-box box2'>
              <svg viewBox="0 0 24 24" className='c-img' fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12ZM16 12V13.5C16 14.8807 17.1193 16 18.5 16V16C19.8807 16 21 14.8807 21 13.5V12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21H16" stroke="#726CA2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                <input placeholder='Enter your email' className='c-input' type='email' name='email' required></input>              
              </div>
              <div className='c-input-box box3'>
                <svg viewBox="0 0 24 24" className='c-img' fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#726CA2"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.4998 5.50067L18.3282 8.3291M13 21H21M3 21.0004L3.04745 20.6683C3.21536 19.4929 3.29932 18.9052 3.49029 18.3565C3.65975 17.8697 3.89124 17.4067 4.17906 16.979C4.50341 16.497 4.92319 16.0772 5.76274 15.2377L17.4107 3.58969C18.1918 2.80865 19.4581 2.80864 20.2392 3.58969C21.0202 4.37074 21.0202 5.63707 20.2392 6.41812L8.37744 18.2798C7.61579 19.0415 7.23497 19.4223 6.8012 19.7252C6.41618 19.994 6.00093 20.2167 5.56398 20.3887C5.07171 20.5824 4.54375 20.6889 3.48793 20.902L3 21.0004Z" stroke="#726CA2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                <textarea placeholder='Enter your message' className='c-input c-message-input' name='message' required></textarea>
              </div>
              <button type='submit' className='c-submit'>Submit</button>
            </form>
          </div>

          <div className='c-right'>
            <img 
              src={img1}
              className='c-right-img'
            /> 
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact