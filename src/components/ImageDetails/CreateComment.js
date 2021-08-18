import React from "react";

const CreateComment = () => {
  return (
    <article className="media">
      <div className="media-content">
        <form onSubmit={handelFormSubmit}>
          <div className="field">
            <div className="control">
              <textarea
                className="textarea"
                placeholder="Add a comment..."
                value={values.comment}
                name="comment"
                onChange={handleInputChange}
              ></textarea>
            </div>
          </div>
          <nav className="level">
            <div className="level-left">
              <div className="level-item">
                <button className="button is-info">Submit</button>
              </div>
            </div>
          </nav>
        </form>
      </div>
    </article>
  );
};

export default CreateComment;
