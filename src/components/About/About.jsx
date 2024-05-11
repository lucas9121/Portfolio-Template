import './About.css'

export default function About({toggle, isClicked}){
    const animationStyle = {
        animationDuration: isClicked ? '0s' : '2s'
    }
    
    return(
        <div id="About" className={toggle ? 'dark' : "light"} style={animationStyle}>
            <h2 className={toggle ? 'dark-mode' : ""}>About me</h2>
            <article id="AboutMe">
                <div id="About-description">
                    <div>
                        <h3 className={toggle ? 'about-title dark-mode' :'about-title'}>Who I am</h3>
                        <p>
                          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio repellendus exercitationem quod, rerum iste architecto dolore sapiente nihil. Ex incidunt mollitia veritatis dicta quia dolorem molestias nulla officiis rerum eveniet. 
                        </p>
                        <p>
                          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam laboriosam nihil asperiores totam, nesciunt quam rerum, ea qui suscipit assumenda itaque veritatis. Culpa ratione harum suscipit dicta accusamus laborum illo!
                          Harum quae tenetur, porro officia doloribus nobis ut aliquam a mollitia repellendus? Nihil quam, repellat quaerat voluptate assumenda soluta adipisci illo nulla temporibus consequuntur qui reiciendis! Aut odio quia iusto.
                        </p>
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos vel at accusantium ab dolorem provident placeat, esse recusandae dolor, consequuntur qui, asperiores blanditiis officiis veritatis suscipit alias obcaecati aliquid cum!
                        </p>
                    </div>
                    <div id="skills">
                        <h3 className={toggle ? 'about-title dark-mode' :'about-title'}>Skills</h3>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                        </ul>
                    </div>
                </div>

            </article>
        </div>
    )
}