import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaTelegramPlane,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import {
  WebsiteRights,
  SocialMediaWrap,
  SocialIcons,
  SocialIconLink,
  ILink,
  Cleverabhi,
} from "./Footerstyling";
export default function Footer() {
  return (
    <>
      <footer className='relative bg-gray-800 pt-8 pb-6' id='footer'>
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
        <div className=' mx-auto px-4'>
          <div className='flex flex-wrap'>
            <div className='w-full px-4'>
              <h4 className='text-3xl font-semibold text-black'>
                For any issue or copyrights policy
              </h4>
            </div>
            <SocialMediaWrap>
              <div className='flex flex-wrap items-top mb-6'>
                <div className='w-full px-4 ml-auto'>
                  <span className='block uppercase text-black text-lg mb-2 font-bold'>
                    Social Media
                  </span>
                  <ul className='list-unstyled'>
                    <li>
                      <SocialIconLink
                        style={{
                          textDecoration: 'none',
                          fontSize: '14px',
                          fontWeight: 'bold',
                        }}
                        target='_blank'
                        href='https://github.com/cleverabhi'
                      >
                        Github
                      </SocialIconLink>
                    </li>
                    <li>
                      <SocialIconLink
                        href='https://www.instagram.com/shot.on.spot/'
                        target='_blank'
                        aria-label='Instagram'
                        style={{
                          textDecoration: 'none',
                          fontSize: '14px',
                          fontWeight: 'bold',
                        }}
                      >
                        Instagram
                      </SocialIconLink>
                    </li>
                    <li>
                      <SocialIconLink
                        style={{
                          textDecoration: 'none',
                          fontSize: '14px',
                          fontWeight: 'bold',
                        }}
                        href='https://wa.link/i6iaca'
                        target='_blank'
                        aria-label='Whatsapp'
                      >
                        Whatsapp
                      </SocialIconLink>
                    </li>
                    <li>
                      <SocialIconLink
                        style={{
                          textDecoration: 'none',
                          fontSize: '14px',
                          fontWeight: 'bold',
                        }}
                        href='https://t.me/cleverxabhi'
                        target='_blank'
                        aria-label='Telegram'
                      >
                        Telegram
                      </SocialIconLink>
                    </li>
                    <li>
                      <SocialIconLink
                        style={{
                          textDecoration: 'none',
                          fontSize: '14px',
                          fontWeight: 'bold',
                        }}
                        href='https://www.youtube.com/channel/UCJX4zJeRkxbAjXxgfh4v_Dg'
                        target='_blank'
                        aria-label='Youtube'
                      >
                        Youtube
                      </SocialIconLink>
                    </li>
                  </ul>
                </div>
                <div className='w-full lg:w-2/4 px-4 py-4'>
                  <span className='block uppercase text-black text-lg font-bold mb-2'>
                    &#169; &amp; Privacy Policy
                  </span>
                  <ul className='list-unstyled'>
                    <li>
                      <ILink href='/tandc' target='_blank'>
                        Terms &amp; conditions
                      </ILink>
                    </li>
                    <li>
                      <ILink href='/privacy' target='_blank'>
                        Privacy policy
                      </ILink>
                    </li>
                  </ul>
                </div>
              </div>
            </SocialMediaWrap>
          </div>
          <hr
            style={{
              borderColor: 'black',
              backgrounColor: 'black',
              marginLeft: '15%',
              marginRight: '15%',
            }}
          />
          <div className='flex flex-wrap items-center md:justify-between justify-center'>
            <div className='w-full md:w-4/12 px-4 mx-auto text-center'>
              <SocialMediaWrap>
                <Cleverabhi
                  style={{
                    textDecoration: 'none',
                    fontSize: '30px',
                    fontWeight: 'bold',
                    paddingBottom: '16px',
                  }}
                  target='_blank'
                  href='https://github.com/cleverabhi'
                >
                  @cleverabhi
                </Cleverabhi>
                <WebsiteRights className='text-lg'>
                  Abhishek Kumar &#169; {new Date().getFullYear()} All Rights
                  Reserved
                </WebsiteRights>
                <SocialIcons>
                  <Cleverabhi
                    href='https://www.instagram.com/shot.on.spot/'
                    target='_blank'
                    aria-label='Instagram'
                  >
                    <FaInstagram />
                  </Cleverabhi>
                  <Cleverabhi
                    href='https://wa.link/i6iaca'
                    target='_blank'
                    aria-label='Whatsapp'
                  >
                    <FaWhatsapp />
                  </Cleverabhi>
                  <Cleverabhi
                    href='https://github.com/cleverabhi'
                    target='_blank'
                    aria-label='Github'
                  >
                    <FaGithub />
                  </Cleverabhi>
                  <Cleverabhi
                    href='https://t.me/cleverxabhi'
                    target='_blank'
                    aria-label='Telegram'
                  >
                    <FaTelegramPlane />
                  </Cleverabhi>
                  <Cleverabhi
                    href='https://www.youtube.com/channel/UCJX4zJeRkxbAjXxgfh4v_Dg'
                    target='_blank'
                    aria-label='Youtube'
                  >
                    <FaYoutube />
                  </Cleverabhi>
                </SocialIcons>
              </SocialMediaWrap>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
