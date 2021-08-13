import React from "react";

const Comment = () => {
  return (
    <>
      <article className="media">
        <figure className="media-left">
          <p className="image is-48x48">
            <img
              alt="user pic"
              src="https://bulma.io/images/placeholders/96x96.png"
            />
          </p>
        </figure>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>Sean Brown</strong>
              <br />
              Donec sollicitudin urna eget eros malesuada sagittis. Pellentesque
              habitant morbi tristique senectus et netus et malesuada fames ac
              turpis egestas. Aliquam blandit nisl a nulla sagittis, a lobortis
              leo feugiat.
            </p>
          </div>
        </div>
      </article>

      <article className="media">
        <div className="media-content">
          <div className="field">
            <p className="control">
              <textarea
                className="textarea"
                placeholder="Add a comment..."
              ></textarea>
            </p>
          </div>
          <nav className="level">
            <div className="level-left">
              <div className="level-item">
                <button className="button is-info">Submit</button>
              </div>
            </div>
          </nav>
        </div>
      </article>
    </>
  );
};

export default Comment;
