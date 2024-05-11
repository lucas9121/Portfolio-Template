import "./Footer.css"
import { FaGithub, FaXTwitter, FaLinkedinIn, FaRegFileLines } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer>
            <nav className="footer-container">
                <h2>Batman</h2>
                <h4>Crime fighting vigilante</h4>
                <ul>
                    <li><a href='https://github.com' target='_blank' rel="noreferrer" className='Link Github footer-icon'><FaGithub  /></a></li>
                    <li><a href='https://www.linkedin.com' target='_blank' rel="noreferrer" className='Link footer-icon' id='Linkedin'> <FaLinkedinIn /></a></li>
                    <li><a href='https://twitter.com' target='_blank' rel="noreferrer" className='Link footer-icon' id='Twitter'> <FaXTwitter /></a></li>
                    <li><a href="" target="_blank" rel="noreferrer" download="resume" className="Link footer-icon"><FaRegFileLines /></a></li>
                </ul>
                {/* It would mean a lot if you gave me credit, but it is up to you. */}
                <small className="footer-lower">&copy;Copyright 2024. Crafted by <a href="https://lucascarlos.com/" target="_blank" rel="noreferrer">Lucas Carlos</a></small>
            </nav>
        </footer>
    )
}