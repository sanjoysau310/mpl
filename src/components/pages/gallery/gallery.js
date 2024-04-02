import React from "react";
import "./gallery.css";
import gallery1 from "../../../assets/images/gallery/g1.webp";
import gallery2 from "../../../assets/images/gallery/g2.avif";
import gallery3 from "../../../assets/images/gallery/g3.jpeg";
import gallery4 from "../../../assets/images/gallery/g4.jpg";
import gallery5 from "../../../assets/images/gallery/g5.jpeg";
import gallery6 from "../../../assets/images/gallery/g6.avif";
import { Button, Card, Carousel, Stack } from "react-bootstrap";
import { GalleryFilter } from "./galleryFilter";

export const Gallery = () => {
  const images = [
    { id: 1, category: "personal", title: "gallery1", path: gallery1 },
    { id: 2, category: "team", title: "gallery2", path: gallery2 },
    { id: 3, category: "personal", title: "gallery3", path: gallery3 },
    { id: 4, category: "team", title: "gallery4", path: gallery4 },
    { id: 5, category: "award", title: "gallery5", path: gallery5 },
    { id: 6, category: "award", title: "gallery6", path: gallery6 },
  ];
  return (
    <section id="gallery" className="gallery">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Gallery</h2>
          <p>Check our gallery from the recent events</p>
        </div>
      </div>

      <Carousel style={{ height: "30rem" }} data-bs-theme="dark">
        {Array.from({ length: images.length }).map((_, index) => (
          //{images.map((image, index) => (
          <Carousel.Item key={index} style={{ height: "30rem" }}>
            <Stack
              direction="horizontal"
              className="h-100 justify-content-center align-items-center"
              gap={3}>
              <img
                src={images[index].path}
                className="img-fluid"
                alt
                style={{ width: "50rem" }}
                o
              />
              {/* <img
                  src={images[index + 1].path}
                  className="img-fluid"
                  alt
                  style={{ width: "18rem" }}
                />
                <img
                  src={images[index + 2].path}
                  className="img-fluid"
                  alt
                  style={{ width: "18rem" }}
                /> */}
            </Stack>
          </Carousel.Item>
        ))}
      </Carousel>
      <GalleryFilter images={images} />
    </section>
  );
};
