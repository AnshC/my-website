/** @jsxImportSource theme-ui */

export default function About () {
    return (
        <div className="about main">
            <div sx={{backgroundColor: 'box'}} className="box">
                <h1 sx={{color: 'primary'}}>About Me!</h1>
                <p sx={{color: 'text'}}>
                Hello! I’m Ansh Chauhan, a high school senior (BIS’23) who lives in Jodhpur. Technology is my thing. I’m a graphic designer and code enthusiast. I’ve been practicing graphic design for about 3 years. I am a technology officer in United Under Arts, a non-profit, student run organisation, where I design monthly newsletters and other digital media for them.
                <br />
                <br/>
                My coding journey started when I was in 4th grade; I started with scratch. Currently I develop frontend websites/webapps (with a sprinkle of backend). I’ve moved on from scratch to python and JavaScript, as of now.
                <br />
                <br/>
                In my free time, I tinker around with Arduinos, Raspberry Pi/s and I’ve developed a strong passion for computer engineering, which led me to build my own computer!
                </p>
            </div>
            <div sx={{backgroundColor: 'box'}} className="box">
                <h1 sx={{color: 'primary'}}>Skills.</h1>
                <div className="row">
                    <img src="/img/icons/css.png" alt="CSS" />
                    <img src="/img/icons/firebase.png" alt="Firebase" />
                    <img src="/img/icons/html.png" alt="HTML" />
                    <img src="/img/icons/javascript.png" alt="JS" />
                    <img src="/img/icons/nodejs.png" alt="NodeJS" />
                    <img src="/img/icons/reactjs.png" alt="ReactJS" />
                    <img src="/img/icons/illustrator.png" alt="Ai" />
                    <img src="/img/icons/photoshop.png" alt="Ps" />
                    <img src="/img/icons/premierpro.png" alt="Pr" />
                </div>
            </div>
        </div>
    )
}