import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;
    
const slideForword = () => {
    if(tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}

const slideBackword = () => {
    if(tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}

  return (
    <div className='testimonials'>
      <img src={next_icon} alt='' className='next-btn' onClick={slideForword}/>
      <img src={back_icon} alt='' className='back-btn' onClick={slideBackword}/>
      <div className='slider'>
        <ul ref={slider}>
            <li>
                <div className='slide'>
                    <div className='user-info'>
                    <img src={user_1} alt='' />
                    <div>
                        <h3>John Doe</h3>
                        <span>Demo</span>
                    </div>
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                       standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a 
                       type specimen book.</p>
                </div>
            </li>
            <li>
                <div className='slide'>
                    <div className='user-info'>
                    <img src={user_2} alt='' />
                    <div>
                        <h3>John Doe 1</h3>
                        <span>Demo</span>
                    </div>
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                       standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a 
                       type specimen book.</p>
                </div>
            </li>
            <li>
                <div className='slide'>
                    <div className='user-info'>
                    <img src={user_3} alt='' />
                    <div>
                        <h3>John Doe 2</h3>
                        <span>Demo</span>
                    </div>
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                       standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a 
                       type specimen book.</p>
                </div>
            </li>
            <li>
                <div className='slide'>
                    <div className='user-info'>
                    <img src={user_4} alt='' />
                    <div>
                        <h3>John Doe 3</h3>
                        <span>Demo</span>
                    </div>
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                       standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a 
                       type specimen book.</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
