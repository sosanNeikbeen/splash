import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <section className="hero is-medium ">
      <div className="hero-body">
        <div className="container ">
          <div className="columns ">
            <div className="column is-half is-offset-one-quarter">
              <form class="box">
                <div class="field">
                  <label class="label">Email</label>
                  <div class="control">
                    <input
                      class="input"
                      type="email"
                      placeholder="e.g. alex@example.com"
                    />
                  </div>
                </div>

                <div class="field">
                  <label class="label">Password</label>
                  <div class="control">
                    <input
                      class="input"
                      type="password"
                      placeholder="********"
                    />
                  </div>
                </div>
                <div class="field">
                  <div class="control">
                    Dont have an account <Link to="signup">Sign up</Link>
                  </div>
                </div>

                <button class="button is-primary">Sign in</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
