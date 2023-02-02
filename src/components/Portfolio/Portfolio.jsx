import { Container } from "./styles";
import React, { useState, useEffect, Suspense } from "react";
import githubIcon from "../../assets/github-icon.svg";
import externalLinkIcon from "../../assets/external-link-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";


export function Portfolio() {
  const [loading, setLoading] = useState(true);
  const [readmes, setReadmes] = useState([]);
  const [repos, setRepos] = useState([]);
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://api.github.com/users/yousef69mr/repos"
      );

      const repos = await response.json();
      setRepos(repos);

      let langList = [];

      for (let i = 0; i < repos.length; i++) {
        const lang = await fetch(
          `https://api.github.com/repos/yousef69mr/${repos[i].name}/languages`
        );
        const langdata = await lang.json();

        langList.push(Object.keys(langdata));
      }

      setLanguages(langList);
    })();

    setLoading(false);
  }, []);

  return (
    <Container id="portfolio">
      <h2>Portfolio Menu</h2>

      <div className="projects">
        {repos?.map((repo, i) => (
          <Suspense fallback={"loading"} key={repo.id}>
            <ScrollAnimation animateIn="flipInX">
              <div className="project">
                <header>
                  <svg
                    width="50"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#23ce6b "
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <title>Folder</title>
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                  </svg>
                  <div className="project-links">
                    <a href={repo.html_url} target="_blank" rel="noreferrer">
                      <img src={githubIcon} alt="GitHub" />
                    </a>
                  </div>
                </header>
                <div className="body">
                  <h3>{repo.name}</h3>
                </div>
                <footer>
                  <ul className="tech-list">
                    {languages[i]?.map((lang, i) => (
                      <li key={i}>{lang}</li>
                    ))}
                  </ul>
                </footer>
              </div>
            </ScrollAnimation>
          </Suspense>
        ))}
      </div>
    </Container>
  );
}
