import "../css/feature.css";
import Section from "./Section";
import item1 from "../assets/image/002-jigsaw.png";
import item2 from "../assets/image/004-layout.png";
import item3 from "../assets/image/003-settings.png";
import item4 from "../assets/image/001-product.png";
import "../css/grid.css";

function Feature() {
  return (
    <Section headline="Feature" secondary={true}>
      <ul className="grid grid-col4">
        <li className="grid-item">
          <dl className="feature">
            <dt className="feature-headline">1. Great Service</dt>
            <dd className="feature-img">
              <img src={item1} alt="great service" width="100px" height="100px"/>
              </dd>
              <dd className="feature-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente, aut.
            </dd>
          </dl>
        </li>
        <li className="grid-item">
          <dl className="feature">
            <dt className="feature-headline">2. High Performance</dt>
            <dd className="feature-img">
              <img src={item2} alt="great service"  width="100px" height="100px"/>
              </dd>
              <dd className="feature-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente, aut.
            </dd>
          </dl>
        </li>
        <li className="grid-item">
          <dl className="feature">
            <dt className="feature-headline">3. Strong Responsibility</dt>
            <dd className="feature-img">
              <img src={item3} alt="great service"  width="100px" height="100px"/>
              </dd>
              <dd className="feature-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente, aut.
            </dd>
          </dl>
        </li>
        <li className="grid-item">
          <dl className="feature">
            <dt className="feature-headline">4. Performance</dt>
            <dd className="feature-img">
              <img src={item4} alt="great service"  width="100px" height="100px"/>
              </dd>
              <dd className="feature-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, aut.
            </dd>
          </dl>
        </li>
      </ul>
 
    </Section>
  );
}

export default Feature;
