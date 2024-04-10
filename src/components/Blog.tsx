import React from "react";
import Section from "./Section";
import Grid from "./Grid";
import "../assets/css/blog.css";
import { blogItems } from "../items/blogItems";

function Blog() {
  const sectionProps = { headline: "Blog", secondary: false };
  const gridProps = { itemCol: 3 };

  return (
    <Section
      headline={sectionProps.headline}
      secondary={sectionProps.secondary}
    >
      <Grid itemCol={gridProps.itemCol}>
        {blogItems.map((item, key) => (
          <article className="card" key={key}>
            <a href="#" className="card-link">
              <span className="card-label">New</span>
              <img className="card-image" src={item.image} alt="blog1 image" />
              <time className="card-time" dateTime="2024-4-8">
                {item.time}
              </time>
              <h2 className="card-title">{item.card_title}</h2>
              <p className="card-description">{item.card_description}</p>

              <div className="avatar">
                <div className="avatar-icon">
                  <img src={item.avatar.icon} alt="avatar image" />
                </div>
                <div className="avatar-name">{item.avatar.name}</div>
              </div>
            </a>
          </article>
        ))}
      </Grid>
      <div className="selection-button">
        <a href="#" className="button">
          Blog Page
        </a>
      </div>
    </Section>
  );
}

export default Blog;
