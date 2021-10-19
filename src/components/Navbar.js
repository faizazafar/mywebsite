import React from 'react'
import './Navbar.css'
import { FaFacebookSquare , FaInstagramSquare , FaYoutubeSquare } from "react-icons/fa";

export default function Navbar() {
    return (
        <div>
            {/* 1st logo part */}
            <nav className="main-nav">
                <div className="logo">
                    <h2>
                        <span>T</span>echno
                        <span>K</span>nowledge
                    </h2>
                </div>

                <div className="menu-link">
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Service</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </div>
                 {/* social media links */}
                 <div className="social-media">
                     <ul className="social-media-desktop">
                         <li>
                             <a href="https://www.youtube.com/watch?v=8AJ3Kcz5FsM&t=76s" target="_thapa">
                             <FaFacebookSquare/>    
                             </a>
                         </li>
                         <li>
                             <a href="https://www.youtube.com/watch?v=8AJ3Kcz5FsM&t=76s" target="_thapa">
                             <FaInstagramSquare className="Instagram"/>    
                             </a>
                         </li>
                         <li>
                             <a href="https://www.youtube.com/watch?v=8AJ3Kcz5FsM&t=76s" target="_thapa">
                             <FaYoutubeSquare className="Youtube"/>    
                             </a>
                         </li>
                     </ul>

                 </div>
            </nav>

            <section className="section-1">

                <p>Welcome to</p>
                <h1>TechnoKnowlege</h1>
            </section>
        </div>
    )
}
