<template lang="fr">
    <div class="vue__portfolio__container">
        <navigator />
        <h2 class="sub-title title-bis">Portfolio</h2>
        <div class="portfolio-text">
          <h3>Découvrez mes projets !</h3>
          <p>
            J’ambitionne de démarrer une carrière en tant que 
            <strong class="strong-dev">DEVELOPPEUR WEB FULL STACK</strong>, 
            dans cette perspective, la  formation de 8 mois dont j’ai bénéficié m’a permis :
            <ul>
              <li>de découvrir et utiliser de nouvelles technologies et méthodes de travail</li>
              <li>de travailler en autonomie sur des projets très différents couvrant le front-end et le back-end</li>
              <li>m’a permis de développer une réelle capacité d’organisation, 
                à prioriser et rechercher les actions pertinentes pour face au plus grand nombre de situations</li>
            </ul>
            Autant d’atouts dans ma volonté de monter en compétences dans mon futur métier.
          </p>
        </div>
        <section class="projects">
          
          <figure class="c4-izmir c4-border-top-right c4-image-zoom-in project" v-for="project in projects" :key="project.name">

              <img v-if="project.picture" :src="project.picture" :alt="project.alt" class="project-img">
              
                <figcaption>
                  <div class="c4-reveal-right">
                    <h3>{{project.name}}</h3>
                    <br>
                    <p v-for="(tech, i) in project.techs" :key="i" class="project-technos">
                      <span>{{tech}}</span> 
                    </p>
                    <br>
                    <div class="btn-wrapper">
                      <button v-if="project.code"><a :href="project.code" target="_blank">le Code</a></button>
                      <button v-if="project.link"><a :href="project.link" target="_blank">le Site</a></button>
                    </div>
                  </div>
                </figcaption>
              
          </figure>

        </section>
      <footerBar />
    </div>
</template>

<script>
import Nav from '@/components/Nav.vue';
import Foot from '@/components/Foot.vue';
export default {
  components: {
    navigator: Nav,
    footerBar: Foot,
  },
  data() {
    return {
      projects: [
        {
          name: 'Audiophile',
          link: 'https://6515f55974f9bd0e5e28e3f3--euphonious-cobbler-8775e1.netlify.app/',
          code: 'https://github.com/EdouardHrgt/Audiophile',
          alt: 'Site E-commerce',
          picture: require('@/assets/projects/audiophile.png'),
          techs: ['vite', 'vue', 'Pinia', 'TailWind'],
        },
        {
          name: 'Designo',
          link: 'https://65044e6f9e34cd18268bfd7b--designo-0website.netlify.app/company',
          code: 'https://github.com/EdouardHrgt/Designo',
          alt: 'Agence Creative',
          picture: require('@/assets/projects/designo.png'),
          techs: ['vite', 'vue', 'Pinia'],
        },
        {
          name: 'MyTeam',
          link: 'https://precious-kitten-4a4661.netlify.app/home',
          code: 'https://github.com/EdouardHrgt/my-team',
          alt: 'Agence De Management',
          picture: require('@/assets/projects/myteam.png'),
          techs: ['vite', 'vue'],
        },
        {
          name: 'Sneakers',
          link: 'https://eclectic-melba-a023de.netlify.app/',
          code: 'https://github.com/EdouardHrgt/sneakers/tree/main/frontend',
          alt: 'Site E-commerce de basket',
          picture: require('@/assets/projects/sneakers.png'),
          techs: ['html', 'css', 'javascript', 'vue'],
        },
        {
          name: 'Splitter',
          link: 'https://edouardhrgt.github.io/tipcalculator/',
          code: 'https://github.com/EdouardHrgt/tipcalculator',
          alt: 'Calculateur de pourboire pour les groupes',
          picture: require('@/assets/projects/splitter.png'),
          techs: ['html', 'css', 'javascript'],
        },
        {
          name: 'Dev Porfolio',
          link: 'https://ornate-youtiao-0a6174.netlify.app/',
          code: 'https://github.com/EdouardHrgt/portfolio',
          alt: 'Portfolio de Développeur',
          picture: require('@/assets/projects/portfolio.png'),
          techs: ['html', 'css', 'javascript', 'vue'],
        },
        {
          name: 'Bookie',
          link: 'https://edouardhrgt.github.io/bookie/',
          code: 'https://github.com/EdouardHrgt/bookie',
          alt: 'Intégration du site BOOKIE',
          picture: require('@/assets/projects/bookie.png'),
          techs: ['html', 'css'],
        },
        {
          name: 'ThePanet',
          link: 'https://effulgent-fenglisu-dc4b60.netlify.app/planet/mercury',
          code: 'https://github.com/EdouardHrgt/planets',
          alt: 'Le système solaire',
          picture: require('@/assets/projects/planet.png'),
          techs: ['Vite', 'Vue'],
        },
        {
          name: 'Shi Fu Mi',
          link: 'https://edouardhrgt.github.io/Shi-Fu-Mi/',
          code: 'https://github.com/EdouardHrgt/Shi-Fu-Mi',
          alt: 'Jeu du pierre - feuille - ciseaux en ligne',
          picture: require('@/assets/projects/shi-fu-mi.png'),
          techs: ['html', 'css', 'javascript', 'vue'],
        },
        {
          name: 'OhMyFood',
          link: 'https://edouardhrgt.github.io/OhmyFood-/',
          code: 'https://github.com/EdouardHrgt/OhmyFood-',
          alt: "Intégration de l'appli mobile Oh My Food",
          picture: require('@/assets/projects/ohmyfood.png'),
          techs: ['html', 'sass'],
        },
        {
          name: 'Calculator',
          link: 'https://edouardhrgt.github.io/TheCalculator/',
          code: 'https://github.com/EdouardHrgt/TheCalculator',
          alt: 'Calculatrice en ligne',
          picture: require('@/assets/projects/calculator.png'),
          techs: ['html', 'css', 'javascript'],
        },
        {
          name: 'DevJobs',
          link: 'https://curious-biscuit-4b7e05.netlify.app/',
          code: 'https://github.com/EdouardHrgt/devjobs',
          alt: "Site de recherche d'emploi",
          picture: require('@/assets/projects/devjobs.png'),
          techs: ['Vue', 'css', 'javascript'],
        },
        {
          name: 'Blogr',
          link: 'https://edouardhrgt.github.io/blogr/',
          code: 'https://github.com/EdouardHrgt/blogr',
          alt: 'Intégration du site blogr',
          picture: require('@/assets/projects/blogr.png'),
          techs: ['html', 'css', 'javascript'],
        },
        {
          name: 'Groupomania',
          code: 'https://github.com/EdouardHrgt/Groupomania',
          alt: 'Réseaux Social interne de Groupomania',
          picture: require('@/assets/projects/groupo.png'),
          techs: ['html', 'css', 'javascript', 'vue', 'node', 'mysql'],
        },
        {
          name: 'Guess my number',
          link: 'https://edouardhrgt.github.io/guess_my_number/',
          code: 'https://github.com/EdouardHrgt/guess_my_number',
          alt: 'Devinez le nombre généré',
          picture: require('@/assets/projects/guess-my-number.png'),
          techs: ['html', 'css', 'javascript', 'vue'],
        },
        {
          name: 'TodoList',
          link: 'http://mczkdip.cluster029.hosting.ovh.net/',
          code: 'https://github.com/EdouardHrgt/TodoList-App',
          alt: 'une liste dynamique',
          picture: require('@/assets/projects/todolist.png'),
          techs: ['html', 'css', 'javascript', 'vue'],
        },
      ],
    };
  },
};
</script>

<style scoped>
.vue__portfolio__container {
  background-color: var(--light-2);
  min-height: 100vh;
}
/*Zone de texte */
.portfolio-text {
  width: 1200px;
  margin: 5rem auto;
  padding: 0 1.8rem;
}
.portfolio-text h3 {
  color: var(--dark-2);
  letter-spacing: 1.75px;
  font-size: 2.8rem;
  margin-bottom: 1.5rem;
}
.portfolio-text p {
  width: 650px;
  line-height: 160%;
  color: var(--dark-2);
  font-size: 1.05rem;
}
.portfolio-text p strong {
  font-weight: normal;
  color: var(--dark-1);
}
.portfolio-text p .strong-dev {
  color: var(--col-1);
  font-weight: bolder;
}
.portfolio-text p ul {
  margin: 0.6rem 1.3rem;
  width: 100%;
}
.portfolio-text p ul li {
  margin: 0.3rem 0;
  line-height: 130%;
  font-style: italic;
}
/*Galerie des projets*/
.projects {
  color: var(--light-1);
  margin: 6rem auto;
  width: 1200px;
  min-height: 600px;
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: (1fr) [4];
  grid-template-columns: repeat(4, 1fr);
  -ms-grid-rows: (1fr) [3];
  grid-template-rows: repeat(3, 1fr);
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  justify-items: center;
}
.projects > *:nth-child(1) {
  -ms-grid-row: 1;
  -ms-grid-column: 1;
}
.projects > *:nth-child(2) {
  -ms-grid-row: 1;
  -ms-grid-column: 2;
}
.projects > *:nth-child(3) {
  -ms-grid-row: 1;
  -ms-grid-column: 3;
}
.projects > *:nth-child(4) {
  -ms-grid-row: 1;
  -ms-grid-column: 4;
}
.projects > *:nth-child(5) {
  -ms-grid-row: 2;
  -ms-grid-column: 1;
}
.projects > *:nth-child(6) {
  -ms-grid-row: 2;
  -ms-grid-column: 2;
}
.projects > *:nth-child(7) {
  -ms-grid-row: 2;
  -ms-grid-column: 3;
}
.projects > *:nth-child(8) {
  -ms-grid-row: 2;
  -ms-grid-column: 4;
}
.projects > *:nth-child(9) {
  -ms-grid-row: 3;
  -ms-grid-column: 1;
}
.projects .project {
  width: 250px;
  height: 250px;
  background-color: var(--trans-1);
  cursor: pointer;
  position: relative;
  outline: 1px solid var(--col-2);
  margin: 1rem 0;
}
.project-name {
  background-color: var(--trans-3);
  color: var(--light-1);
  font-weight: bold;
  width: 100%;
  height: 25px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  -webkit-transition: 0.4s;
  -o-transition: 0.4s;
  transition: 0.4s;
}
.project-technos {
  margin: 7px 4px;
}
.project-technos span {
  background: #39cccc;
  font-size: 14px;
  padding: 3px 7px;
  font-weight: bolder;
  border-radius: 5px 0 5px 0;
}
.project .btn-wrapper {
  position: absolute;
  bottom: 30px;
  left: 20px;
  right: 20px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: space-evenly;
  -ms-flex-pack: space-evenly;
  justify-content: space-evenly;
}
.project button {
  background: none;
  background-color: var(--col-3);
  border-radius: 2px;
}
.project button a {
  color: #39cccc;
  font-size: 13px;
}
.project button:hover {
  background-color: var(--light-2);
}
.project button a:hover {
  color: var(--col-3);
}
@media screen and (max-width: 1200px) {
  .projects {
    color: var(--light-1);
    margin: 7rem auto;
    width: 550px;
    height: auto;
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: (1fr) [2];
    grid-template-columns: repeat(2, 1fr);
    -ms-grid-rows: (1fr) [4];
    grid-template-rows: repeat(4, 1fr);
  }
  .projects > *:nth-child(1) {
    -ms-grid-row: 1;
    -ms-grid-column: 1;
  }
  .projects > *:nth-child(2) {
    -ms-grid-row: 1;
    -ms-grid-column: 2;
  }
  .projects > *:nth-child(3) {
    -ms-grid-row: 2;
    -ms-grid-column: 1;
  }
  .projects > *:nth-child(4) {
    -ms-grid-row: 2;
    -ms-grid-column: 2;
  }
  .projects > *:nth-child(5) {
    -ms-grid-row: 3;
    -ms-grid-column: 1;
  }
  .projects > *:nth-child(6) {
    -ms-grid-row: 3;
    -ms-grid-column: 2;
  }
  .projects > *:nth-child(7) {
    -ms-grid-row: 4;
    -ms-grid-column: 1;
  }
  .projects > *:nth-child(8) {
    -ms-grid-row: 4;
    -ms-grid-column: 2;
  }
  .projects .project {
    margin-bottom: 1.6rem;
  }
  .portfolio-text {
    width: 90%;
  }
  .portfolio-text p {
    width: 100%;
  }
}
@media screen and (max-width: 600px) {
  .portfolio-text {
    width: 95%;
  }
  .portfolio-text h3 {
    font-size: 2rem;
  }
  .projects {
    color: var(--light-1);
    margin: 3rem auto;
    width: 95%;
    height: auto;
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: (1fr) [1];
    grid-template-columns: repeat(1, 1fr);
    -ms-grid-rows: (1fr) [8];
    grid-template-rows: repeat(8, 1fr);
  }
  .projects > *:nth-child(1) {
    -ms-grid-row: 1;
    -ms-grid-column: 1;
  }
  .projects > *:nth-child(2) {
    -ms-grid-row: 2;
    -ms-grid-column: 1;
  }
  .projects > *:nth-child(3) {
    -ms-grid-row: 3;
    -ms-grid-column: 1;
  }
  .projects > *:nth-child(4) {
    -ms-grid-row: 4;
    -ms-grid-column: 1;
  }
  .projects > *:nth-child(5) {
    -ms-grid-row: 5;
    -ms-grid-column: 1;
  }
  .projects > *:nth-child(6) {
    -ms-grid-row: 6;
    -ms-grid-column: 1;
  }
  .projects > *:nth-child(7) {
    -ms-grid-row: 7;
    -ms-grid-column: 1;
  }
  .projects > *:nth-child(8) {
    -ms-grid-row: 8;
    -ms-grid-column: 1;
  }
  .projects .project {
    width: 300px;
    height: 300px;
    margin-bottom: 1rem;
  }
}
</style>
