import "./App.css";
import myPhoto from "./myPhoto.jpeg";
function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro name="Shabnam" />
        <SkillList />
      </div>
    </div>
  );
}
function Avatar() {
  return (
    <div>
      <img className="avatar-photo" src={myPhoto} alt="myPhoto" />
    </div>
  );
}
function Intro(props) {
  return (
    <div>
      <p className="data">
        I'm <strong>{props.name}</strong>!<br /> A dedicated front-end developer
        with a fervent passion for crafting captivating digital experiences.
        <br />
        In my journey as a developer, I've embraced the ever-evolving landscape
        of web development, seeking to master new techniques to push the
        boundaries of what's possible. <br />
        Whether it's bringing pixel-perfect designs to life or optimizing user
        interfaces for seamless interaction, I find joy in every aspect of the
        front-end development process. <br />
        I'm excited to connect with fellow enthusiasts, collaborate on exciting
        projects. Let's build something remarkable together!
      </p>
    </div>
  );
}
function Skill(props) {
  return (
    <div style={{ background: props.bgColor }} className="skill">
      {props.skill}
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="Reactjs" bgColor="#95b7ed" />
      <Skill skill="HTML" bgColor="#faacf6" />
      <Skill skill="Javascript" bgColor="#faeaac" />
      <Skill skill="vuejs" bgColor="#acfab5" />
      <Skill skill="Git" bgColor="#f5a69f" />
      <Skill skill="Asp Razor" bgColor="#9ff5e8" />
      <Skill skill="TypeScript" bgColor="#4a4df7" />
      <Skill skill="CSS" bgColor="#f2b263" />
    </div>
  );
}

export default App;
