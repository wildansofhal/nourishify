import { Link } from "react-router-dom";
import Logo from "../component/Logo";

function Signin() {
  return (
    <>
      <div className="signin">
        <header>
          <Logo />
        </header>
        <main>
          <div>
            <h2>Sign In</h2>
            <input type="email" placeholder="Email Address" />
            <input type="password" placeholder="Password" />
            <Link to="/dashboard" className="btn_gs">
              Login
            </Link>
            <p>Or</p>
            <button>Sign In With Google</button>
          </div>
        </main>
      </div>
    </>
  );
}

export default Signin;
