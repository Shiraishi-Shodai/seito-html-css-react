import React from "react";
import "../css/blog.css";
import Section from "./Section";
import Grid from "./Grid";
import { blogItems } from "../items/blogItems";
function Blog() {
  const sectionProps = {"headline" : "Blog", "secondary": false};
  const gridProps = {"itemCol": 3};

  return (
    <Section headline={sectionProps.headline} secondary={sectionProps.secondary}>
      <Grid itemCol={gridProps.itemCol}>
        {blogItems.map((item, key) => (
          <article className="card" key={key}>
            <a href="#" className="card-link">
              <span className="card-label">New</span>
              <img className="card-image" src={item.image} alt="blog1 image" />
              <time dateTime="2024-4-8">{item.time}</time>
              <h2 className="card-title">{item["card-title"]}</h2>
              <p className="card-description">{item["card-description"]}</p>

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
    </Section>
  );
}

export default Blog;
