import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCalendarWeek } from "@fortawesome/free-solid-svg-icons";
import { faArrowsAltV } from "@fortawesome/free-solid-svg-icons";
import { faArrowsAltH } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const About = ({ data }) => {
  const [date, setDate] = useState();

  useEffect(() => {
    const convertDate = () => {
      let date = new Date(data.created_at);
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let dt = date.getDate();

      if (dt < 10) {
        dt = "0" + dt;
      }
      if (month < 10) {
        month = "0" + month;
      }

      const newDate = year + "-" + month + "-" + dt;
      setDate(newDate);
    };

    convertDate();
  }, [date]);

  return (
    <aside className="menu">
      <ul className="menu-list">
        <li>
          <span className="icon has-text-grey">
            <FontAwesomeIcon icon={faUser} />
          </span>
          <span className="ml-2 has-text-grey">taken by: {data.user.name}</span>
        </li>
        <li>
          <span className="icon has-text-grey">
            <FontAwesomeIcon icon={faCalendarWeek} />
          </span>
          <span className="ml-2 has-text-grey">Published on: {date}</span>
        </li>
        <li>
          <span className="icon has-text-grey">
            <FontAwesomeIcon icon={faArrowsAltV} />
          </span>
          <span className="ml-2 has-text-grey">Height: {data.height}</span>
        </li>
        <li>
          <span className="icon has-text-grey">
            <FontAwesomeIcon icon={faArrowsAltH} />
          </span>
          <span className="ml-2 has-text-grey">Width: {data.width}</span>
        </li>
        <li>
          <span className="icon has-text-grey">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
          </span>
          <span className="ml-2 has-text-grey">
            Location :{data.location.country}
          </span>
        </li>
      </ul>
    </aside>
    // <div className="container is-max-widescreen">
    //   <div class="columns is-mobile">
    //     <div class="column">
    //       <h3 class="title has-text-grey is-6">Photographer</h3>
    //       <h3 class="subtitle is-6">{data.user.name}</h3>
    //     </div>
    //     <div class="column">
    //       <h3 class="title has-text-grey is-6">published at</h3>
    //       <h3 class="subtitle is-6">{data.created_at}</h3>
    //     </div>
    //     <div class="column">
    //       <h3 class="title has-text-grey is-6">Height</h3>
    //       <h3 class="subtitle is-6">{data.height}</h3>
    //     </div>
    //   </div>
    //   <div class="columns is-mobile">
    //     <div class="column">
    //       <h3 class="title has-text-grey is-6">Camera make</h3>
    //       <h3 class="subtitle is-6">{data.exif.make}</h3>
    //     </div>
    //     <div class="column">
    //       <h3 class="title has-text-grey is-6">Model</h3>
    //       <h3 class="subtitle is-6">{data.exif.model}</h3>
    //     </div>
    //     <div class="column">
    //       <h3 class="title has-text-grey is-6">Location</h3>
    //       <h3 class="subtitle is-6">{data.location.country}</h3>
    //     </div>
    //   </div>
    // </div>
  );
};

export default About;
