import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import unsplash from "../../api/unsplash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Tabs from "../Tabs";
import Comments from "./Comments";
import About from "./About";
import { saveAs } from "file-saver";

const ImageDetails = () => {
  const [data, setData] = useState({});
  const [likes, setLikes] = useState(0);
  const [isDisable, setIsDisable] = useState(false);
  const history = useHistory();
  const url = window.location.pathname;
  const id = url.substring(url.lastIndexOf("/") + 1);

  useEffect(() => {
    const getData = async () => {
      const response = await unsplash.get(`/photos/${id}`);
      setData(response.data);
    };

    getData();
  }, [id]);

  const goBack = (e) => {
    e.preventDefault();
    history.push("/search");
  };

  const comment = () => <Comments imageId={id} />;
  const about = () => <About data={data} />;

  const tabs = [
    { label: "Comments", component: comment },
    { label: "About", component: about },
  ];

  const downlaodImage = () => {
    saveAs(data.urls.regular, "image.jpg");
  };

  const likeImage = () => {
    let newCount = likes + 1;
    setLikes(newCount);
    setIsDisable(true);
  };

  return (
    <div className="container ">
      {Object.keys(data).length !== 0 ? (
        <div className="box ">
          <div className="level is-mobile">
            <div className="level-left">
              <div className="level-item">
                <button className="button is-white " onClick={goBack}>
                  <span className="icon">
                    <FontAwesomeIcon icon={faArrowLeft} />
                  </span>
                  <span>Go back </span>
                </button>
              </div>
            </div>
            <div className="level-right">
              <div className="level-item">
                <button
                  className="button"
                  onClick={likeImage}
                  disabled={isDisable}
                >
                  <span className={isDisable ? "icon has-text-danger" : "icon"}>
                    <FontAwesomeIcon icon={faHeart} />
                  </span>
                </button>
              </div>
              <div className="level-item">
                <button className="button is-info" onClick={downlaodImage}>
                  <span>Download</span>
                  <span className="icon">
                    <FontAwesomeIcon icon={faDownload} />
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div className="columns is-centered">
            <div className="column is-half">
              <figure>
                <img alt={data.alt_description} src={data.urls.full} />
              </figure>
            </div>
          </div>
          <div className="level is-mobile">
            <div className="level-left">
              <div className="level-item">
                <span className="icon-text has-text-grey">
                  <span className="icon">
                    <FontAwesomeIcon icon={faDownload} />
                  </span>
                  <span className="ml-2">{data.downloads}</span>
                </span>
              </div>
              <div className="level-item">
                <span className="icon-text has-text-grey">
                  <span className="icon">
                    <FontAwesomeIcon icon={faEye} />
                  </span>
                  <span className="ml-2">{data.views}</span>
                </span>
              </div>
              <div className="level-item">
                <span className="icon-text has-text-grey">
                  <span className="icon">
                    <FontAwesomeIcon icon={faHeart} />
                  </span>
                  <span className="ml-2">{likes}</span>
                </span>
              </div>
            </div>
          </div>
          <Tabs tabs={tabs} className="tabs" />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ImageDetails;
