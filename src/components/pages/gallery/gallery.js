import React from "react";
import "./gallery.css";
import gallery1 from "../../../assets/images/gallery/g1.webp";
import gallery2 from "../../../assets/images/gallery/g2.avif";
import gallery3 from "../../../assets/images/gallery/g3.jpeg";
import gallery4 from "../../../assets/images/gallery/g4.jpg";
import gallery5 from "../../../assets/images/gallery/g5.jpeg";
import gallery6 from "../../../assets/images/gallery/g6.avif";
import { Button, Card, Carousel, Stack } from "react-bootstrap";

export const Gallery = () => {
  const reviews = [
    { _id: 1, text: "abc" },
    { _id: 2, text: "def" },
    { _id: 3, text: "ghi" },
    { _id: 4, text: "jkl" },
    { _id: 5, text: "mno" },
    { _id: 6, text: "pqr" },
    { _id: 7, text: "stu" },
    { _id: 8, text: "vwx" },
    { _id: 9, text: "yza" },
  ];
  return (
    <>
      <section id="gallery">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>Gallery</h2>
            <p>Check our gallery from the recent events</p>
          </div>
        </div>

        <Carousel style={{ height: 500 }} data-bs-theme="dark">
          {reviews.map((review, index) => (
            <Carousel.Item style={{ height: 500 }}>
              <Stack
                direction="horizontal"
                className="h-100 justify-content-center align-items-center"
                gap={3}>
                <img
                  src={gallery1}
                  className="img-fluid"
                  alt
                  style={{ width: "18rem" }}
                />

                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>

                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Stack>
            </Carousel.Item>
          ))}
        </Carousel>
      </section>
    </>
  );
};
