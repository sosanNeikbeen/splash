import React, { useState, useEffect } from "react";
import { firestore } from "../../firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const Comments = ({ imageId }) => {
  const initialFiledValues = {
    imageId: "",
    comment: "",
  };

  const [values, setvalues] = useState(initialFiledValues);
  const [comments, setComments] = useState([]);

  const handleInputChange = (e) => {
    let { value } = e.target;
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
  const data = [];
  const fetchComments = async () => {
    const response = firestore
      .collection("comments")
      .where("imageId", "==", imageId);
    const result = await response.get();

    result.forEach((doc) => {
      const temp = {
        commentId: doc.id,
        ...doc.data(),
      };
      data.push(temp);
    });

    setComments(data);
  };

  const deleteComment = (id) => {
    firestore
      .collection("comments")
      .doc(id)
      .delete()
      .then(() => {
        console.log("Document successfully deleted!");
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  };

  // const editComment = (id) => {
  //   firestore
  //     .collection("comments")
  //     .doc(id)
  //     .set({
  //       imageId: values.imageId,
  //       comment: values.comment,
  //     })
  //     .then(() => {
  //       console.log("Document successfully updated");
  //     })
  //     .catch((error) => {
  //       console.error("Error removing document: ", error);
  //     });
  // };

  useEffect(() => {
    fetchComments();
  }, [data]);

  return (
    <>
      {comments ? (
        comments.map((cmnt) => {
          return (
            <article key={cmnt.commentId} className="media">
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
              <span onClick={() => deleteComment(cmnt.commentId)}>
                <FontAwesomeIcon
                  className="m-3 has-text-info"
                  icon={faTrashAlt}
                />
              </span>
              {/* <span onClick={() => editComment(cmnt.commentId)}>edit</span> */}
            </article>
          );
        })
      ) : (
        <div>no comments found</div>
      )}

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
                  <button type="submit" className="button is-info">
                    Submit
                  </button>
                </div>
              </div>
            </nav>
          </form>
        </div>
      </article>
    </>
  );
};

export default Comments;
