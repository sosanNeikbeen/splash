import React, { useRef, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";

const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/images/:id");
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
              <form onSubmit={handleSubmit} class="box">
                <div class="field">
                  <label class="label">Email</label>
                  <div class="control has-icons-left ">
                    <input
                      class="input"
                      type="email"
                      placeholder="Email"
                      ref={emailRef}
                    />
                    <span class="icon is-small is-left">
                      <FontAwesomeIcon className="m-3" icon={faEnvelope} />
                    </span>
                  </div>
                </div>
                <div class="field">
                  <label class="label">Password</label>
                  <div class="control has-icons-left">
                    <input
                      class="input"
                      type="password"
                      placeholder="********"
                      ref={passwordRef}
                    />
                    <span class="icon is-small is-left">
                      <FontAwesomeIcon className="m-3" icon={faLock} />
                    </span>
                  </div>
                </div>
                <div class="field">
                  <label class="label">Password Confirmation</label>
                  <div class="control has-icons-left">
                    <input
                      class="input"
                      type="password"
                      placeholder="********"
                      ref={passwordConfirmRef}
                    />
                    <span class="icon is-small is-left">
                      <FontAwesomeIcon className="m-3" icon={faLock} />
                    </span>
                  </div>
                </div>

                <div class="field">
                  <div class="control">
                    Already have an account <Link to="signin">Sign in</Link>
                  </div>
                </div>

                <div class="field is-grouped">
                  <div class="control">
                    <button class="button is-info">Submit</button>
                  </div>
                  <div class="control">
                    <button type="submit" class="button is-link is-light">
                      <Link to="/">Cancel</Link>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
