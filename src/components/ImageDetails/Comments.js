import React, { useState, useEffect } from "react";
import { firestore } from "../../firebase";

const Comment = ({ imageId }) => {
  const initialFiledValues = {
    imageId: "",
    comment: "",
  };

  const [values, setvalues] = useState(initialFiledValues);
  const [comments, setComments] = useState([]);

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setvalues({
      ...values,
      comment: value,
      imageId: imageId,
    });
  };

  const handelFormSubmit = (e) => {
    e.preventDefault();

    firestore.collection("comments").add({
      imageId: values.imageId,
      comment: values.comment,
    });
    setvalues({
      imageId: "",
      comment: "",
    });
  };

  const fetchComments = async () => {
    const response = firestore
      .collection("comments")
      .where("imageId", "==", imageId);
    const result = await response.get();
    const data = [];

    result.forEach((doc) => {
      data.push(doc.data());
    });

    setComments(data);
  };

  useEffect(() => {
    fetchComments();
  }, [values]);

  return (
    <>
      {comments
        ? comments.map((cmnt) => {
            return (
              <article key={cmnt.imageId} className="media">
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
                      <strong>Anonymous</strong>
                      <br />
                      {cmnt.comment}
                    </p>
                  </div>
                </div>
              </article>
            );
          })
        : "no comments found for this pic"}

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
    </>
  );
};

export default Comment;
