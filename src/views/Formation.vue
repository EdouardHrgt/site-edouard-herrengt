<template lang="fr">
    <div class="vue__formations__container">
        <navigator />
        <section class="formations" id="_formations">
      <h2 class="sub-title title-bis">Formations</h2>

      <div class="form-1">
        <span class="date"><em class="time">2021-2022</em><br />Développeur web</span>
        <div class="bulle"></div>
        <div class="taches">
          <p><strong>Open Classrooms</strong>.fr</p>
          <ul>
            <li>
              Apprentissage (sous mentorat) du développement web full stack et de ses bonnes pratiques (SEO, RGPD, WCAG)
            </li>
            <li>Réalisation de 7 projets web en totale autonomie 
              allant de l'intégration à la création d'un site E-commerce, de REST API puis d'un réseau social.</li>
          </ul>
        </div>
      </div>
      
      <div class="form-2">
        <span class="date"><em class="time">Avril-Juin 2021</em><br />Programmation web</span>
        <div class="bulle"></div>
        <div class="taches">
          <p><strong>CodeCademy</strong>.com</p>
          <ul>
            <li>
              Découverte des langages de programmation orienté web :<br>
              <span id="prog">Html - Css - JavaScript - PHP</span>.
            </li>
          </ul>
        </div>
      </div>

      <div class="form-3">
        <span class="date"
          ><em class="time">2011</em><br />Licence Marketing et Management opérationnel</span
        >
        <div class="bulle"></div>
        <div class="taches">
          <p><strong>Saint Jude</strong> Armentières</p>
          <ul>
            <li>Apprentissage en alternance des techniques managérialles opérationnelles.</li>
            <li>Approfondissement des connaissances pratiques du marketing numérique.</li>
          </ul>
        </div>
      </div>

      <div class="form-4">
        <span class="date"><em class="time">2010</em><br />Formation complémentaire d'Anglais</span>
        <div class="bulle"></div>
        <div class="taches">
          <p><strong>Meridian school</strong> Plymouth</p>
          <ul>
            <li>
              Séjour de 2 mois en Angleterre avec cours d'Anglais et création de projets d'entreprise (business
              models...)
            </li>
          </ul>
        </div>
      </div>

      <div class="form-5">
        <span class="date"
          ><em class="time">2008-2010</em><br />BTS Management des unités commerciales</span
        >
        <div class="bulle"></div>
        <div class="taches">
          <p><strong>Saint Jean-Baptiste De La Salle</strong> Lille</p>
          <ul>
            <li>
              Création de projets orientés vers l'entreprenariat, comptabilité, gestion financière,
              techniques modernes de marketing et de management.
            </li>
          </ul>
        </div>
      </div>

      <div class="form-6">
        <span class="date"
          ><em class="time">2006-2008</em><br />BAC Sience technique de gestion option
          Marketing</span
        >
        <div class="bulle"></div>
        <div class="taches">
          <p><strong>Saint Jean-Baptiste De La Salle</strong> Lille</p>
          <ul>
            <li>
              Apprentissage général ainsi que les bases des concepts de gestion, d'économie et de
              droit des entreprises.
            </li>
          </ul>
        </div>
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
.bulle {
  background-color: var(--col-1);
  border-radius: 100%;
  height: 8px;
  margin: 0 20px;
  min-height: 8px;
  min-width: 8px;
  width: 8px;
}
.form-1 {
  padding-top: 30px;
}
[class^='form-'] {
  -webkit-box-align: baseline;
  -ms-flex-align: baseline;
  align-items: baseline;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin: 2.1em 10% 2.1em 20%;
  width: 70%;
}
[class^='form-']:last-child {
  margin-bottom: 0;
  padding-bottom: 60px;
}

.formations strong {
  color: var(--dark-2);
  font-size: 1.3em;
  letter-spacing: 1.5px;
}

.time {
  color: var(--col-2);
  font-size: 1em;
  font-weight: bold;
  text-transform: none;
}

.formations li {
  font-weight: 300;
  list-style-type: '-   ';
  max-width: 75%;
  padding: 0.3em 0;
}

.formations li span {
  color: var(--dark-1);
}

.date {
  font-size: 1.1em;
  line-height: 25px;
  max-width: 220px;
  min-width: 220px;
  padding: 0;
  text-align: end;
}

.formations {
  background-color: var(--light-2);
  color: var(--dark-1);
}

.formations li {
  list-style: none;
}

.taches p {
  color: var(--col-2);
  font-style: italic;
}
/*Tablettes */
@media screen and (max-width: 1024px) {
  .formations li {
    max-width: 100%;
  }
}
/* Mobile */
@media screen and (max-width: 768px) {
  .formations {
    background-color: var(--light-2);
  }
  .form-1 {
    padding-top: 0px;
  }
  [class^='form-'] {
    -webkit-box-align: initial;
    -ms-flex-align: initial;
    align-items: initial;
    border-bottom: var(--light-2) 1px solid;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    margin: 0 !important;
    width: 100% !important;
  }

  [class^='form-'] {
    border-bottom: var(--col-3) 1px solid;
  }

  [class^='form-']:last-child {
    border-bottom: none;
  }

  .formations {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }

  .time {
    font-size: 0.7em;
    color: var(--col-2);
  }

  .date {
    display: inline-block;
    font-weight: bold;
    letter-spacing: 1.5px;
    max-width: none;
    min-width: none;
    padding: 0.8em 0 0;
    text-align: center;
    width: 100%;
  }

  .bulle {
    display: none;
  }

  .formations ul {
    padding: 0;
    width: 100%;
  }

  .formations li {
    color: var(--col-3);
    font-size: 1.05em;
    margin: auto;
    padding: 1em 0 2em 0 !important;
    width: 100%;
    text-align: center;
  }

  .formations p {
    color: var(--col-3);
    display: inline-block;
    font-size: 1em;
    letter-spacing: 2px;
    padding-top: 1em;
    text-align: center;
    width: 100%;
  }

  .formations span {
    font-size: 1.5em;
    line-height: 1.3em;
    margin: auto;
    width: 70%;
  }
}
</style>
