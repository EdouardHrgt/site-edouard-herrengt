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
          name: 'Splitter',
          link: 'https://edouardhrgt.github.io/tipcalculator/',
          code: 'https://github.com/EdouardHrgt/tipcalculator',
          alt: 'Calculateur de pourboire pour les groupes',
          picture: require('@/assets/projects/splitter.png'),
          techs: ['html', 'css', 'javascript'],
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
          name: 'Accordeon',
          link: 'https://edouardhrgt.github.io/accordeon/',
          code: 'https://github.com/EdouardHrgt/accordeon',
          alt: 'Site de FAQ',
          picture: require('@/assets/projects/accordeon.png'),
          techs: ['html', 'css', 'javascript'],
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
  height: 600px;
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: (1fr) [4];
  grid-template-columns: repeat(4, 1fr);
  -ms-grid-rows: (1fr) [2];
  grid-template-rows: repeat(2, 1fr);
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
.projects .project {
  width: 250px;
  height: 250px;
  background-color: var(--trans-1);
  cursor: pointer;
  position: relative;
  outline: 1px solid var(--col-2);
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
