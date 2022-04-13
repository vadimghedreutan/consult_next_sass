import Image from "next/image";
import CheckBg from "../../images/check.svg";
import { RichText } from "prismic-reactjs";
import htmlSerializer from "../../utils/htmlSerializer";

function About({ home }) {
  return (
    <section id="about">
      <div className="container">
        <div className="about">
          <div className="about_content">
            <h1>{RichText.asText(home.about_title)}</h1>
            <RichText
              render={home.about_description}
              htmlSerializer={htmlSerializer}
            />
          </div>
          <div className="about_img">
            <Image src={CheckBg} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
