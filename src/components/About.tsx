import React from "react";
import "../assets/css/about.css";
import Section from "./Section";

function About() {
  return (
    <Section headline="About" secondary={false} >
      <figure className="about-figure">
        <img
          src="https://images.pexels.com/photos/208147/pexels-photo-208147.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="about-image"
        />
        <figcaption className="about-caption">
          <h2 className="about-headline">What we can do ?</h2>
          <p className="about-description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat,
            tempora accusamus quae eaque, excepturi labore fuga illo dolorum
            ducimus repudiandae aperiam eligendi unde aut. Culpa et iste itaque,
            sit cumque recusandae odit laudantium. Sed autem numquam, amet
            veniam facere optio, debitis assumenda, iste exercitationem quaerat
            totam voluptates et voluptate. Pariatur!
          </p>
        </figcaption>
      </figure>
    </Section>
  );
}

export default About;
