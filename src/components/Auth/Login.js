import React, { useRef, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";

const SignIn = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch (error) {
      setError(error.message);
    }

    setLoading(false);
  }

  return (
    <section className="hero is-medium ">
      <div className="hero-body">
        <div className="container ">
          <div className="columns ">
            <div className="column is-half is-offset-one-quarter">
              {error ? (
                <div className="notification is-danger is-light">{error}</div>
              ) : (
                ""
              )}

              <form onSubmit={handleSubmit} className="box">
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control has-icons-left">
                    <input
                      className="input"
                      type="email"
                      placeholder="e.g. alex@example.com"
                      ref={emailRef}
                    />
                    <span class="icon is-small is-left">
                      <FontAwesomeIcon className="m-3" icon={faEnvelope} />
                    </span>
                  </div>
                </div>

                <div className="field">
                  <label className="label">Password</label>
                  <div className="control has-icons-left">
                    <input
                      className="input"
                      type="password"
                      placeholder="********"
                      ref={passwordRef}
                    />
                    <span class="icon is-small is-left">
                      <FontAwesomeIcon className="m-3" icon={faLock} />
                    </span>
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    Dont have an account <Link to="signup">Sign up</Link>
                  </div>
                </div>

                <button type="submit" className="button is-info">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
