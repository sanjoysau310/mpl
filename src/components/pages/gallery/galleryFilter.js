import React, { useState } from "react";
import "./galleryFilter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Lightbox from "yet-another-react-lightbox";

export const GalleryFilter = ({ images }) => {
  const [filter, setFilter] = useState("all");
  const [open, setOpen] = useState(false);
  return (
    <div className="mt-5">
      <div className="row" data-aos="fade-up" data-aos-delay={100}>
        <div className="col-lg-12 d-flex justify-content-center">
          {/* filter */}
          <ul id="gallery-flters">
            <li
              data-filter="*"
              className={filter === "all" && "filter-active"}
              onClick={() => setFilter("all")}>
              All
            </li>
            <li
              data-filter=".filter-app"
              className={filter === "personal" && "filter-active"}
              onClick={() => setFilter("personal")}>
              Personal
            </li>
            <li
              data-filter=".filter-card"
              className={filter === "team" && "filter-active"}
              onClick={() => setFilter("team")}>
              Team
            </li>
            <li
              data-filter=".filter-web"
              className={filter === "award" && "filter-active"}
              onClick={() => setFilter("award")}>
              Award
            </li>
          </ul>
          {/* filter */}
        </div>
      </div>
      <div
        className="row gy-4 gallery-container"
        data-aos="fade-up"
        data-aos-delay={200}>
        {images.map((image, index) => {
          return (
            (filter === image.category || filter === "all") && (
              <div
                className="col-lg-4 col-md-6 d-flex justify-content-center gallery-item filter-app"
                key={index}>
                <div className="gallery-wrap">
                  {/* {console.log(filter)} */}
                  <img src={image.path} className="img-fluid" alt="gallery" />
                  <div className="gallery-info">
                    <h4>{image.title}</h4>
                    <p>{image.title}</p>
                    <div className="gallery-links">
                      {/* <a
                        href={image.path}
                        data-gallery="galleryGallery"
                        className="portfokio-lightbox"
                        title="App 1">
                        
                      </a> */}
                      <FontAwesomeIcon
                        icon={faPlus}
                        onClick={() => setOpen(true)}
                      />
                      {/* <a href="gallery-details.html" title="More Details">
                          <i className="fa fa-link" />
                        </a> */}
                    </div>
                  </div>
                </div>
              </div>
            )
          );
        })}
      </div>
      <Lightbox open={open} close={() => setOpen(false)} slides={images} />
    </div>
  );
};
