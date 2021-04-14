import React from "react";

//import { makeStyles } from "@material-ui/core/styles";
import githubStyles from "../styles/github.module.css";
import Drawer from "@material-ui/core/Drawer";

import { AiFillGithub } from "react-icons/ai";

//const useStyles = makeStyles((theme) => ({

//}));

const GitHub = ({ dataRepo }) => {
  const [state, setState] = React.useState({
    bottom: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const avatar = dataRepo.reposData[0];

  const loginName = dataRepo.reposData[0];

  return (
    <div>
      {["bottom"].map((anchor) => (
        <React.Fragment key={anchor}>
          <div className={githubStyles.gitBtnCtn}>
            <button
              onClick={toggleDrawer(anchor, true)}
              className={githubStyles.gitBtn}
            >
              <AiFillGithub className={githubStyles.gitIcn} />
            </button>
          </div>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            <div className={githubStyles.topDrawer}>
              <img src={avatar.owner.avatar_url} alt="avatar" />
              <h2>{loginName.owner.login}</h2>
            </div>
            <div className={githubStyles.gitDraw}>
              {dataRepo.reposData.map((repo, id) => (
                <div key={id} className={githubStyles.gitcard}>
                  <div className={githubStyles.gitcardInner}>
                    <div className={githubStyles.gitTitle}>
                      <a href={repo.html_url}>{repo.name}</a>
                    </div>
                    <p className={githubStyles.gitDesc}>
                      {repo.description
                        ? repo.description
                        : "Description Not Provided"}
                    </p>
                    <p className={githubStyles.gitLanguage}>
                      <span className={githubStyles.gitCtnLang}>
                        <span
                          className={`${githubStyles.gitCircleColor} ${
                            repo.language === "JavaScript"
                              ? githubStyles.jsCircleColor
                              : repo.language === "HTML"
                              ? githubStyles.htmlCircleColor
                              : repo.language === "CSS"
                              ? githubStyles.cssCircleColor
                              : githubStyles.gitCircleColor
                          } `}
                        ></span>
                        <span>{repo.language}</span>
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default GitHub;
