import React, { useState, useEffect } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Navbar from '../Navbar'
import Footer from '../Footer'
import './resume.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import db from '../../firebase'
import pexel from '../../images/pexel.jpeg'
import landing from '../../images/landing.jpg'
import Sidebar from '../Sidebar'
// import Netflix from '../../images/netflix.png'
// import Amazon from '../../images/amazon.png'
import UI from '../../images/ui.png'
import Raven from '../../images/raven.png'
import ASUCLA from '../../images/asucla.png'
import Troubleshoot from '../../images/troubleshoot.png'
import WebDevelopment from '../../images/web_development.png'
import MPBirla from '../../images/mp_birla.png'
// import Chatbox from '../../images/chatbox.png'

export default function Landing() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
    })
  }, [])

  const feedbackForm = (e) => {
    e.preventDefault()
    let name = document.querySelector('#username')
    let email = document.querySelector('#usermail')
    let message = document.querySelector('#usermessage')

    if (name.value === '' || email.value === '' || message.value === '') {
      alert('Please Check your Name, Email-Id or Message you have entered')
    } else {
      const feed = db.collection('feedback')
      let userinput = name.value
      let emailinput = email.value
      let messageinput = message.value

      name.value = null
      email.value = null
      message.value = null

      //Access the database collection
      feed
        .doc()
        .set({
          name: userinput,
          email: emailinput,
          message: messageinput,
        })
        .then(function () {
          alert('Thank you for your Valuable Time')
        })
        .catch(function (error) {
          alert(error)
        })
    }
  }
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <div className='scroll-up-btn'>
        <i className='fas fa-angle-up'></i>
      </div>
      <main>
        <div
          className='relative pt-16 pb-32 flex content-center items-center justify-center'
          style={{
            minHeight: '95vh',
          }}
        >
          <img
            className='absolute top-0 w-full h-full bg-center bg-cover'
            alt='...'
            id='home_image'
            src={landing}
          />
          {/* <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-75 bg-black"
          ></span> */}
          <div className='container relative mx-auto'>
            <div className='items-center flex flex-wrap'>
              <div className='w-full lg:w-6/12 px-4 ml-auto mr-auto text-center'>
                <div className='pr-12'>
                  <h1
                    className='text-white font-semibold text-5xl'
                    data-aos='fade-in-left'
                  >
                    <i>Hello there, Myself Abhishek Kumar</i>
                  </h1>
                  <p
                    className='font-semibold text-2xl mt-4 text-lg text-gray-300'
                    data-aos='fade-in-right'
                  >
                    <i>I am a Web Developer</i>
                    {/* Let me take you into a deeper experience, make a moment a
                    lasting conveyable memory. */}
                  </p>
                  <a
                    id='download'
                    className={
                      'bg-transparent text-white font-bold py-2 px-4 border border-white-400 rounded inline-block mt-12 cursor-pointer '
                    }
                    href='https://drive.google.com/file/d/1GqGPgdqbNThRNvfW2wH3jSi1i7OzW1kX/view?usp=sharing'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    View Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className='top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden'
            style={{ height: '70px', transform: 'translateZ(0)' }}
          >
            <svg
              className='absolute bottom-0 overflow-hidden'
              xmlns='http://www.w3.org/2000/svg'
              preserveAspectRatio='none'
              version='1.1'
              viewBox='0 0 2560 100'
              x='0'
              y='0'
            >
              <polygon
                className='text-black fill-current'
                points='2560 0 2560 100 0 100'
              ></polygon>
            </svg>
          </div>
        </div>
        <section id='about' className='relative py-20 bg-black text-white'>
          <div className='container mx-auto px-4'>
            <div className='items-center flex flex-wrap'>
              <div
                className='w-full p-2 md:w-5/12 ml-auto mr-auto px-4'
                data-aos='fade-right'
              >
                <img
                  alt='...'
                  className='max-w-full rounded-lg shadow-lg'
                  src={pexel}
                />
              </div>
              <div
                className='w-full p-2 md:w-5/12 ml-auto mr-auto px-4'
                data-aos='fade-left'
              >
                <div className='md:pr-12'>
                  <h3 className='text-4xl mt-4 font-bold'>
                    Developing Designs EveryDay
                  </h3>
                  <p className='mt-4 text-lg leading-relaxed'>
                    Every great design begins with an even better story.
                  </p>
                  <ul className='list-none mt-6'>
                    <li className='py-2'>
                      <div className='flex items-center'>
                        <div>
                          <span className='font-semibold inline-block py-3 mr-3 text-white'>
                            <i className='fas fa-lightbulb fa-2x'></i>
                          </span>
                        </div>
                        <div>
                          <h4 className='text-md'>Creative Designs</h4>
                        </div>
                      </div>
                    </li>
                    <li className='py-2'>
                      <div className='flex items-center'>
                        <div>
                          <span className=' inline-block py-3 mr-3 text-white'>
                            <i className='fab fa-html5 fa-2x'></i>
                          </span>
                        </div>
                        <div>
                          <h4 className='text-md'>
                            Creating Beautiful Patterns
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className='py-2'>
                      <div className='flex items-center'>
                        <div>
                          <span className=' inline-block py-3 mr-3 text-white'>
                            <i className='far fa-paper-plane fa-2x'></i>
                          </span>
                        </div>
                        <div>
                          <h4 className='text-lg'>
                            Providing Innovative UI/UX Experience
                          </h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className='w-full p-2 md:w-5/12 ml-auto mr-auto px-4'
                data-aos='fade-left'
              >
                <div className='md:pr-12'>
                  <h3 className='text-4xl font-bold' id='education'>
                    Education
                  </h3>

                  <ul className='list-none'>
                    <li className='py-2'>
                      <div className='flex items-center'>
                        <div>
                          <span className='font-semibold inline-block py-3 mr-3 text-white'>
                            <i className='fas fa-graduation-cap fa-2x'></i>
                          </span>
                        </div>
                        <div>
                          <h4 className='text-md'>Bachelor of Engineering</h4>
                          <p>
                            Visvesvaraya Technological University (CGPA 8.5)
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className='py-2'>
                      <div className='flex items-center'>
                        <div>
                          <span className='font-semibold inline-block py-3 mr-3 text-white'>
                            <i className='fas fa-award fa-3x'></i>
                          </span>
                        </div>
                        <div>
                          <h4 className='text-md'>
                            Higher Secondary Education
                          </h4>
                          <p>Wilson College</p>
                        </div>
                      </div>
                    </li>
                    <li className='py-2'>
                      <div className='flex items-center'>
                        <div>
                          <span className='font-semibold inline-block py-3 mr-3 text-white'>
                            <i className='fas fa-chalkboard-teacher fa-2x'></i>
                          </span>
                        </div>
                        <div>
                          <h4 className='text-md'>Secondary Education</h4>
                          <p>Marwari Vidyalaya High School</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className='w-full p-2 md:w-5/12 ml-auto mr-auto px-4'
                data-aos='fade-left'
              >
                <div className='md:pr-12'>
                  <h3 className='text-4xl font-bold m-6' id='education'>
                    Contact Me
                  </h3>

                  <ul className='list-none '>
                    <li className='py-2'>
                      <div className='flex items-center'>
                        <div>
                          <span className='font-semibold inline-block py-3 mr-3 text-white'>
                            <i className='fas fa-map-marker fa-2x'></i>
                          </span>
                        </div>
                        <div>
                          <h4 className='text-lg'>Jaipur, Rajasthan</h4>
                        </div>
                      </div>
                    </li>
                    <li className='py-2'>
                      <div className='flex items-center'>
                        <div>
                          <span className='font-semibold inline-block py-3 mr-3 text-white'>
                            <i className='fas fa-phone fa-2x'></i>
                          </span>
                        </div>
                        <div>
                          <h4 className='text-lg'>+91 9867343804</h4>
                        </div>
                      </div>
                    </li>
                    <li className='py-2'>
                      <div className='flex items-center'>
                        <div>
                          <span className='font-semibold inline-block py-3 mr-3 text-white'>
                            <i className='fas fa-envelope fa-2x'></i>
                          </span>
                        </div>
                        <div>
                          <h4 className='text-lg'>
                            abhishekkumarkumbhar159@gmail.com
                          </h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className='pb-20 bg-gray-900 text-white text-center'
          id='services'
        >
          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <h2 className='text-4xl font-semibold text-white full-width '>
              {'<!-- '}My Skills{' -->'}
            </h2>
          </div>
          <div className='serv-content'>
            <div className='card'>
              <div className='box'>
                <i className='fas fa-code fa-2x p-4'></i>
                <div className='text'>HTML</div>
                <p style={{ fontSize: '13px' }} className='p-2'>
                  Hyper Text Markup Language
                </p>
              </div>
            </div>
            <div className='card'>
              <div className='box'>
                <i className='fas fa-paint-brush fa-2x p-4'></i>
                <div className='text'>CSS</div>
                <p style={{ fontSize: '13px' }} className='p-2'>
                  Cascading Style Sheets
                </p>
              </div>
            </div>
            <div className='card '>
              <div className='box'>
                <i className='fab fa-js fa-2x p-4'></i>
                <div className='text'>JAVASCRIPT</div>
                <p style={{ fontSize: '13px' }} className='p-2'>
                  JavaScript
                  <br /> (ES6)
                </p>
              </div>
            </div>
            <div className='card'>
              <div className='box'>
                <i className='fab fa-angular fa-2x p-4'></i>
                <div className='text'>Angular</div>
                <p style={{ fontSize: '13px' }} className='p-2'>
                  Client-Side TypeScript Framework
                </p>
              </div>
            </div>
            <div className='card'>
              <div className='box'>
                <i className='fab fa-react fa-2x p-4'></i>
                <div className='text'>React</div>
                <p style={{ fontSize: '13px' }} className='p-2'>
                  Client-Side JavaScript Framework
                </p>
              </div>
            </div>
            <div className='card'>
              <div className='box'>
                <i className='fab fa-vuejs fa-2x p-4'></i>
                <div className='text'>Vue</div>
                <p style={{ fontSize: '13px' }} className='p-2'>
                  Client-Side JavaScript Framework
                </p>
              </div>
            </div>
            <div className='card'>
              <div className='box'>
                <i className='fab fa-node fa-2x p-4'></i>
                <div className='text'>NodeJS</div>
                <p style={{ fontSize: '13px' }} className='p-2'>
                  Server-Side
                  <br /> JavaScript
                </p>
              </div>
            </div>
            <div className='card'>
              <div className='box'>
                <i className='fab fa-etsy fa-2x p-4'></i>
                <div className='text'>Express</div>
                <p style={{ fontSize: '13px' }} className='p-2'>
                  Built on top of <br /> NodeJS
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id='expert' className='pt-20 pb-12 bg-gray-900 text-white'>
          <div
            id='expertt'
            className='container mx-auto px-4 bg-gray-900 bg-center bg-cover'
          >
            <div className='flex flex-wrap justify-center text-center mb-24'>
              <div className='w-full lg:w-6/12 px-4'>
                <h2 className='text-4xl font-semibold ' data-aos='fade-down'>
                  {' <!-- '}What I am Good at {'-->'}
                </h2>
                <p className='text-lg leading-relaxed m-4 ' data-aos='fade-up'>
                  What seperates design from art is that design is meant to be
                  <i>...functional</i>
                </p>
              </div>
            </div>
            <div className='flex flex-wrap'>
              <div className='w-full md:w-4/12 lg:mb-0 mb-12 px-4'>
                <div className='px-6'>
                  <img
                    alt='...'
                    src={WebDevelopment}
                    className='shadow-lg rounded-full bg-black max-w-full mx-auto'
                    data-aos='fade-down-right'
                    style={{ maxWidth: '120px' }}
                    id='animationlogo'
                  />
                  <div className='pt-6 text-center'>
                    <h5 className='text-xl font-bold '>
                      Constantly learning and improving
                    </h5>
                    <p className='mt-1 text-sm   font-semibold'>
                      A keen interest in technology
                    </p>
                  </div>
                </div>
              </div>
              <div className='w-full md:w-4/12 lg:mb-0 mb-12 px-4'>
                <div className='px-6'>
                  <img
                    alt='...'
                    src={UI}
                    className='shadow-lg rounded-full max-w-full mx-auto'
                    data-aos='fade-down'
                    style={{ maxWidth: '120px' }}
                    id='animationlogo'
                  />
                  <div className='pt-6 text-center'>
                    <h5 className='text-xl font-bold '>Attention to detail</h5>
                    <p className='mt-1 text-sm   font-semibold'>
                      Delivering a great User Experience
                    </p>
                  </div>
                </div>
              </div>
              <div className='w-full md:w-4/12 lg:mb-0 mb-12 px-4'>
                <div className='px-6'>
                  <img
                    alt='...'
                    src={Troubleshoot}
                    className='shadow-lg rounded-full max-w-full mx-auto'
                    data-aos='fade-down-left'
                    style={{ maxWidth: '120px' }}
                    id='animationlogo'
                  />
                  <div className='pt-6 text-center'>
                    <h5 className='text-xl font-bold '>
                      Excellent problem-solving skills
                    </h5>
                    <p className='mt-1 text-sm   font-semibold'>
                      Troubleshooting and debugging issues
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className='py-10 bg-gray-900 text-white text-center'
          id='projects'
        >
          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <h2 className='text-4xl font-semibold text-white full-width '>
              {'<!-- '}My Projects{' -->'}
            </h2>
          </div>
          <div
            className='serv-content'
            style={{ justifyContent: 'space-evenly' }}
          >
            <div id='hovercard' className='specialcard card'>
              <a href='#' rel='noopener noreferrer'>
                <img style={{ padding: '' }} src={Raven} alt='netflixclone' />
              </a>
              <div style={{ marginTop: '10px' }}>
                <p style={{ color: 'white', fontSize: 'large' }}>
                  {' '}
                  Raven360 - Rule Engine
                </p>
              </div>
            </div>

            <div id='hovercard' className='specialcard card'>
              <a href='#' rel='noopener noreferrer'>
                <img style={{ padding: '20px' }} src={MPBirla} alt='mp birla' />
              </a>
              <div style={{ marginTop: '10px' }}>
                <p style={{ color: 'white', fontSize: 'large' }}>
                  {' '}
                  MP Birla- Club Ultimate
                </p>
              </div>
            </div>
            <div id='hovercard' className='specialcard card'>
              <a href='#' rel='noopener noreferrer'>
                <img style={{ padding: '0' }} src={ASUCLA} alt='asucla' />
              </a>
              <div style={{ marginTop: '10px' }}>
                <p style={{ color: 'white', fontSize: 'large' }}> ASUCLA</p>
              </div>
            </div>
          </div>
        </section>
        <div className='py-10 bg-black text-white'></div>
        <section
          id='feedback'
          className='relative block py-24 lg:pt-0 bg-black text-white'
        >
          <div className='feedbackform bg-black text-white'></div>
          <div className='container mx-auto px-4'>
            <div className='flex flex-wrap justify-center lg:-mt-64 -mt-48'>
              <div className='w-full lg:w-6/12 px-4'>
                <div
                  id='experttt'
                  className='relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-green-500 mt-12'
                >
                  <form className='flex-auto p-5 lg:p-10' method='POST'>
                    <h4 className='text-2xl font-semibold uppercase '>
                      Get in touch with me?
                    </h4>
                    <p className='leading-relaxed mt-1 mb-4 '>
                      Complete this form and I will get back to you within 14
                      Business Days.
                    </p>
                    <div className='relative w-full mb-3 mt-8 '>
                      <label
                        className='block uppercase  text-xs font-bold mb-2'
                        htmlFor='full-name'
                      >
                        Full Name
                      </label>
                      <input
                        type='text'
                        className='px-3 py-3 placeholder-gray-400  bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full'
                        placeholder='Full Name'
                        style={{ color: 'black' }}
                        name='Full Name'
                        id='username'
                        autoComplete='off'
                      />
                    </div>

                    <div className='relative w-full mb-3'>
                      <label
                        className='block uppercase  text-xs font-bold mb-2'
                        htmlFor='email'
                      >
                        Email
                      </label>
                      <input
                        type='email'
                        pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
                        className='px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full'
                        placeholder='Email'
                        style={{ color: 'black' }}
                        name='Email'
                        id='usermail'
                        autoComplete='off'
                      />
                    </div>

                    <div className='relative w-full mb-3'>
                      <label
                        className='block uppercase  text-xs font-bold mb-2'
                        htmlFor='message'
                      >
                        Message
                      </label>
                      <textarea
                        style={{ color: 'black' }}
                        rows='4'
                        cols='80'
                        className='px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full'
                        placeholder='Type a message...'
                        name='Message'
                        id='usermessage'
                        autoComplete='off'
                      />
                    </div>
                    <div className='text-center mt-6'>
                      <button
                        className='bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1'
                        type='submit'
                        style={{ color: 'white', background: 'black' }}
                        id='submitbtn'
                        onClick={feedbackForm}
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div id='findme'>
        <Footer />
      </div>
    </>
  )
}
