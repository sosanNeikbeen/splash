import React, { useRef, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { useAuth } from "../context/AuthContext";
import "./ImageCard.css";

const ImageCard = ({ image }) => {
  const [spans, setSpans] = useState(0);
  const imageRef = useRef();
  const history = useHistory();
  const { addToast } = useToasts();
  const { currentUser } = useAuth();
  const isLoggedIn = currentUser.isLoggedIn;

  useEffect(() => {
    imageRef.current.addEventListener("load", setImageSpan);
  }, []);

  const setImageSpan = () => {
    const height = imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);

    setSpans(spans);
  };

  const onButtonClick = (e) => {
    e.preventDefault();
    if (isLoggedIn) {
      history.push(`/images/${image.id}`);
    } else {
      addToast("please login to see this page", { appearance: "error" });
    }
  };

  return (
    <div className="image-card" style={{ gridRowEnd: `span ${spans}` }}>
      <img
        className="image-card-shadow"
        ref={imageRef}
        alt={image.description}
        src={image.urls.regular}
      ></img>

      <div className="image-card-overlay">
        <div className="content">
          <div className="center">
            <button className="button is-white" onClick={onButtonClick}>
              Image details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
