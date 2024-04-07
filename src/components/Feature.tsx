import "../assets/css/feature.css";
import Section from "./Section";
import Grid from "./Grid";
import { featureItems } from "../items/featureItems";

function Feature() {
  const sectionProps = {"headline" : "Feature", "secondary": true};
  const gridProps = {"itemCol": 4};
  return (
    <Section headline={sectionProps.headline} secondary={sectionProps.secondary}>
      <Grid itemCol={gridProps.itemCol}>
        {featureItems.map((item, key) => (
          <dl className="feature" key={key}>
            <dt className="feature-headline">{item.headline}</dt>
            <dd className="feature-img">
              <img
                src={item.image}
                alt="great service"
                width="100px"
                height="100px"
              />
            </dd>
            <dd className="feature-description">{item.description}</dd>
          </dl>
        ))}
      </Grid>
    </Section>
  );
}

export default Feature;
