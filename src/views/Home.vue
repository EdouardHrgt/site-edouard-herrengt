<template>
  <div class="vue__home__container">
    <navigator />
    <header>
      <!-- section "Profil" photo + infos -->
      <section class="title-wrapper">
        <div class="image-container"></div>
        <div class="title-container">
          <h1>Édouard Herrengt</h1>
          <p id="job">Développeur Web</p>
          <h2>Téléphone :</h2>
          <p>06 29 61 17 79</p>
          <h2>Email :</h2>
          <p>herrengt.edouard@gmail.com</p>
          <h2>Adresse :</h2>
          <p>19 Allée Vauban 59110 La Madeleine</p>
          <h2>Date de naissance :</h2>
          <p>7 novembre, 1989</p>
        </div>
      </section>
    </header>

    <section class="socials_presentation-wrapper">
      <!-- Réseaux sociaux-->

      <div class="socials-wrapper">
        <ul class="socials">
          <li>
            <a href="https://www.linkedin.com/in/edouard-herrengt-446716168/" target="_blank">
              <img src="../assets/linkedin.png" alt="profil LinkedIn de Edouard Herrengt" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/Bobely89" target="_blank">
              <img src="../assets/twitter.png" alt="Page Twitter de Edouard herrengt" />
            </a>
          </li>

          <li>
            <a href="mailto:herrengt.edouard@gmail.com?" target="_blank">
              <img src="../assets/email.png" alt=" envoyer un email à Edouard herrengt" />
            </a>
          </li>

          <li>
            <a href="https://github.com/EdouardHrgt" target="_blank">
              <img src="../assets/github.png" alt="Page Github de Edouard herrengt" />
            </a>
          </li>
        </ul>
      </div>

      <!--! Section  Présentation -->

      <div class="presentation">
        <h3><span id="hello">Bonjour !</span><br />Je suis Édouard HÉRRENGT</h3>
        <p>
          Désireux d'entreprendre, j'ai co-fondé la société Epicube SAS à 24 ans. ces 6 années
          d’expériences d’entrepreneur m’ont forgé une réélle aptitude à faire face à toutes
          situations, j’ai développé le sens du travail en équipe et le goût du challenge.
          Aujourd'hui je me suis lancé un nouvel objectif : maitriser le
          <strong>développement Web</strong> !<br />
          <span id="download">
            Retrouvez mon cv au format PDF ici :
            <a class="ddl-btn" href="../CV-Edouard-Herrengt.pdf" target="_blank">Cv.pdf</a>
          </span>
        </p>
      </div>
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
};
</script>

<style scoped>
header {
  background-color: var(--trans-2);
  min-height: 85vh;
  position: relative;
  width: auto;
}
header::before {
  background: url(../assets/City.webp) no-repeat center center/cover;
  content: '';
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -1;
}
/* Section photo + infos */
.title-wrapper,
.socials-wrapper {
  min-width: 520px;
}
.title-wrapper {
  background-color: var(--trans-1);
  bottom: 0;
  color: white;
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: 50% 50%;
  grid-template-columns: 50% 50%;
  margin: 0 25%;
  position: absolute;
  width: 50%;
}
.image-container {
  background: url(../assets/pp.png);
  background-position: center;
  background-size: cover;
  -ms-grid-column: 1;
  grid-column: 1;
}
.title-container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-grid-column: 2;
  grid-column: 2;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-left: 12%;
  position: relative;
}
.title-container h1 {
  padding-top: 10px;
}
.title-container h2 {
  font-size: 1.4em;
  letter-spacing: 2px;
}
.title-container > p {
  margin-bottom: 5%;
  color: white;
}
#job {
  /* sous-titre "dev Web" */
  color: var(--col-1);
  font-size: 1.3em;
  letter-spacing: 2px;
}
/* section RS + Présentation */
.socials_presentation-wrapper {
  background-color: var(--light-2);
  min-height: 70vh;
}
/* Div Réseaux Sociaux */
.socials-wrapper {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: var(--col-3);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 9vh;
  margin: 0 25%;
  min-height: 4em;
  position: relative;
}
.socials {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  list-style: none outside;
  margin: 0;
  padding: 0;
  width: 100%;
}
.socials li a {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.socials img {
  width: 2rem;
  height: 2rem;
  color: white;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
}
.socials img:hover {
  -webkit-transform: scale(1.2);
  -ms-transform: scale(1.2);
  transform: scale(1.2);
}
/* Section présentation*/
.presentation {
  margin: auto;
  padding: 10em 0 15em 0;
  position: relative;
  text-align: center;
  width: 70%;
}
.presentation h3 {
  color: var(--col-2);
  font-size: 2.5em;
  font-weight: 400;
  line-height: 2.8em;
  margin-bottom: 1em;
}
#hello {
  color: var(--col-1);
  font-size: clamp(2.4em, 6vw, 10rem);
  font-weight: bold;
}
.presentation p {
  font-size: larger;
  line-height: 27px;
  margin: 0 auto;
  width: 645px;
  text-align: start;
}
.presentation p strong {
  color: var(--col-1);
  text-decoration: none;
}
/* bouton CV.pdf */
#download {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-top: 0.5em;
}
.ddl-btn {
  background-color: var(--trans-1);
  border-radius: 3px;
  border-style: none;
  display: block;
  margin-left: 20px;
  min-width: 7em;
  padding: 0.3rem 0;
  color: var(--light-1);
  font-size: 1.2rem;
  position: relative;
  top: -5px;
  cursor: pointer;
  text-align: center;
}

.ddl-btn:hover {
  background-color: var(--col-1);
  -webkit-transition: background-color 0.2s ease-in-out;
  -o-transition: background-color 0.2s ease-in-out;
  transition: background-color 0.2s ease-in-out;
}

/* SMART PHONES */
@media screen and (max-width: 768px) {
  header {
    min-height: 530px;
  }

  /* titre + photo */
  .title-wrapper,
  .socials-wrapper {
    min-width: 0px;
  }

  .title-wrapper {
    background-color: var(--trans-1);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin: 0;
    padding: 2em 0;
    width: 100%;
  }

  .image-container {
    display: none;
  }

  .title-container {
    margin-left: 0;
  }

  .title-container h1 {
    font-size: 150%;
  }

  .title-container h2 {
    font-size: 125%;
  }

  .title-container > p {
    cursor: -webkit-grab;
    cursor: grab;
    margin-bottom: 0.5em;
  }

  #job {
    font-size: 120%;
  }

  .line-1 {
    display: none;
  }

  /* Réseaux sociaux */
  .socials-wrapper {
    margin: 0;
    min-height: 4.5em;
  }

  .socials {
    -webkit-box-pack: space-evenly;
    -ms-flex-pack: space-evenly;
    justify-content: space-evenly;
  }

  .socials-wrapper svg {
    margin: 0;
  }

  /* présentation */
  .presentation {
    margin: auto;
    padding: 10em 0;
    width: 100%;
  }

  .presentation h3 {
    font-size: 1.6em;
    padding: 1em 0;
  }

  .presentation p {
    margin: 0 auto;
    font-size: 1.2em;
  }
}

/* TABLETTES */
@media screen and (max-width: 1024px) {
  /* titre + photo */
  .title-wrapper {
    margin: 0 15%;
    width: 70%;
  }

  .socials-wrapper {
    margin: 0 15%;
    width: 70%;
  }

  /* presentation */
  .presentation {
    margin: 0 auto;
    width: 90%;
  }
  .presentation p {
    margin: auto;
    width: 80%;
  }
  #download {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }

  .ddl-btn {
    margin-left: 0;
    margin-top: 1.5em;
    width: 10em;
  }
}
</style>
