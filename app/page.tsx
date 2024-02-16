import { Button } from '../components/Button';

export default function Home() {
  return (
    <> <nav>
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><a href="#t">Top</a></li>
                <li><a href="#s">Skill</a></li>
                <li><a href="#a">About</a></li>
              </ul>
            </div>
          </div>
          <div className="navbar-center">
            <a className="btn btn-ghost text-xl">Nemmy's Website</a>
          </div>
          <div className="navbar-end">
            <ul className="menu menu-horizontal px-1">
              <li><a href="https://github.com/n3mmy">GitHub</a></li>
              <li><a href="https://x.com/nemmy2_">X</a></li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="bottom pb-40" id="s">
        <div className="container1 text-center pb-40" id="t">
          <h1>Hi, 👋<br/>Welcome to Nemmy&#039;s Website!</h1>   
        </div>
        <div className="container1 text-center px-16 windowtab">
          <div className="mockup-window border bg-base-300">
            <div className="flex justify-center px-4 py-36 bg-base-200">My Skills:</div>
            <div className="mockup-code">
              <pre data-prefix="$"><code>HTML, CSS, JS</code></pre> 
              <pre data-prefix=">" className="text-warning"><code>Python</code></pre> 
              <pre data-prefix=">" className="text-success"><code>Node.js</code></pre>
              <pre data-prefix=">" className="text-warning"><code>Bash, Zsh</code></pre>
            </div>
          </div>   
        </div>
      </div>
      <div className="container1">
      </div>
    </>
  );
}