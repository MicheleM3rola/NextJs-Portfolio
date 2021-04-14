import projectStyles from "../styles/project.module.css";
import BlockContent from "@sanity/block-content-to-react";

const CardProject = ({ cardData }) => {
  return (
    <div className={projectStyles.ctnCard}>
      <section className={projectStyles.ctnImgSkills}>
        <div
          className={projectStyles.imgProjects}
          style={{
            backgroundImage: `url(${cardData.mainImage.asset.url})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          {/*  <img
            className={projectStyles.imgSinglePro}
            src={cardData.mainImage.asset.url}
            alt="Project-Image"
          />*/}
        </div>
        <div className={projectStyles.techProjects}>
          {cardData.tech.map((skillImg, id) => (
            <img
              src={skillImg.mainImage.asset.url}
              key={id._id}
              alt="skills"
              className={projectStyles.skillsImgSide}
            />
          ))}
        </div>
      </section>
      <section className={projectStyles.ctnDesc}>
        <div className={projectStyles.innerDesc}>
          <h2>{cardData.title}</h2>
          <BlockContent blocks={cardData.body} />
        </div>
        <div className={projectStyles.btnCallAction}>
          <a
            href={cardData.repo}
            target="_blank"
            rel="norefferer"
            className={projectStyles.BtnCall}
          >
            GitHub
          </a>
          <a
            href={cardData.demo}
            target="_blank"
            rel="norefferer"
            className={projectStyles.BtnCall}
          >
            Demo
          </a>
        </div>
      </section>
    </div>
  );
};

export default CardProject;
