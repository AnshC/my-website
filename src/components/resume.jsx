/** @jsxImportSource theme-ui */
import { Link } from 'react-router-dom'

export default function Resume () {
    return (
        <div className="resume">
            <div>
            <h1 className="head" sx={{color: 'primary'}}><Link className="link" to="/">Ansh Chauhan</Link></h1>
            <p sx={{color: 'text'}}>anshc2005@gmail.com</p>
            <h2 sx={{color: 'primary'}}>High School</h2>
            <p sx={{color: 'text'}}>High School Junior <a href="https://bodhijodhpur.com" target="_blank" rel="noreferrer">@Bodhi International School</a>, expected graduation May 2023.</p>
            <p sx={{color: 'text'}}>Elected as Vice Head Boy</p>
            <h2 sx={{color: 'primary'}}>Academic Achievements</h2>
            <ul>
               <li>4 A*s, 2 As, 1 B (Cambridge IGCSEs)</li>
               <li>1st Place in National Cyber Olympiad (City - 2019)</li>
            </ul>
                <h2 sx={{color: 'primary'}}>2021</h2>
                <ul>
                    <li>Joined Rotract Roundtown, a <a rel="noreferrer" href="https://www.rotary.org/en/get-involved/rotaract-clubs" target="_blank">Rotract Club</a> in Jodhpur:</li>
                    <ul>
                        <li>Graphic Design</li>
                        <li>Web Development</li>
                    </ul>
                    <li><a rel="noreferrer" href="https://unitedunderarts.org" target="_blank">United Under Arts</a> (Technology Officer): </li>
                    <ul>
                        <li>Currently designing monthly newsletters</li>
                    </ul>
                    <li><a rel="noreferrer" href="https://pacificsparkles.com">Pacific Sparkles</a> (Graphic designing, Web development):</li>
                    <ul>
                        <li>Currently designing graphics for their <a rel="noreferrer" href="https://instagram.com/pacific_sparkles" target="_blank">instagram</a></li>
                        <li>Developed and designed their <a rel="noreferrer" href="https://pacificsparkles.com" target="_blank">website</a></li>
                    </ul>
                    <li>Active member of the <a rel="noreferrer" href="https://www.nyas.org/programs/global-stem-alliance/the-junior-academy/" target="_blank">New York Academy of Sciences Junior Academy</a></li>
                    <li>Built my first Node.js App - <a rel="noreferrer" href="https://nextrainfall.glitch.me">Next Rainfall</a></li>
                </ul>
                <h2 sx={{color: 'primary'}}>2020</h2>
                <ul>
                    <li>Joined the New York Academy of Sciences Junior Academy</li>
                    <ul>
                        <li>Competed in <a rel="noreferrer" href="https://joinlaunchpad.com/#/profile/10108" target="_blank">4 challenges</a></li>
                        <li>Team lead for the COVID-19 challenge</li>
                    </ul>
                    <li>Joined <a rel="noreferrer" href="https://unitedunderarts.org" target="_blank">United Under Arts</a>, a student led non-profit, as part of the <a rel="noreferrer" href="https://www.unitedunderarts.org/team/international-officers" target="_blank">Technology Team</a></li>
                    <li>Designed Instagram posts for Pacific Sparkles</li>
                    <li>Assembled my own <a rel="noreferrer" href="https://www.instagram.com/p/B9EGkBzHSyC/" target="_blank">computer</a></li>
                </ul>
            </div>
        </div>
    )
}