<template lang="fr">
    <div class="vue__experiences__container">
        <navigator />
        <section class="experiences" id="_experiences">
        <h2 class="sub-title">Expériences</h2>
        <div class="exp-1">
            <span class="date"><em class="time">2019-2020</em><br />Chef de projet</span>
            <div class="bulle"></div>
            <div class="taches">
            <strong>Free lance</strong>
            <ul>
                <li>
                Gestion et amélioration du protefeuille client pour un collectif de designers
                indépendants (création de modèles 3D, UI, sprites...)
                </li>
                <li>
                Consulting sur l'organisation et l'optimisation de la gestion de projet (méthode en cascade & Adaptative)
                </li>
                <li>Briefings et présentations internes / externes</li>
                <li>Administration du panel interne (gestion des paiements, todo list, planning...)</li>
            </ul>
            </div>
        </div>

        <div class="exp-2">
            <span class="date"><em class="time">2013-2018</em><br />Entrepreneur</span>
            <div class="bulle"></div>
            <div class="taches">
            <strong>Epicube SAS</strong>
            <h3>Direction d'entreprise :</h3>
            <ul>
                <li>Mise en place de la stratégie d’entreprise (business modèle)</li>
                <li>Gestion de crise / Trouble shooting.</li>
                <li>Comptabilité (AE, EIRL, SAS).</li>
                <li>Gestion des partenaires (négociation des ententes commerciales)</li>
            </ul>

            <h3>Management / Community management :</h3>
            <ul>
                <li>
                Gestion d’un staff de 100 bénévoles (équipe graphisme et design ; développement web ;
                développement jeu ; modération)
                </li>
                <li>
                Gestion d’une communauté de 2 millions de joueurs (serveur de jeu, site web et
                réseaux sociaux)
                </li>
            </ul>

            <h3>Gestion de projet</h3>
            <ul>
                <li>Game design (création des concepts, visuels et équilibrages des jeux)</li>
                <li>Veille technologique (analyse et mise à jour de l'offre)</li>
            </ul>

            <h3>Marketing et communication</h3>
            <ul>
                <li>Rédaction d’article.</li>
                <li>Veille commerciale & concurencielle.</li>
                <li>Enquêtes satisfaction.</li>
                <li>Mise en avant des nouvelles offres.</li>
            </ul>
            </div>
        </div>

        <div class="exp-3">
            <span class="date"><em class="time">2011-2014</em><br />Responsable production</span>
            <div class="bulle"></div>
            <div class="taches">
            <strong>Point.DOC</strong>
            <ul>
                <li>Réalisation des devis.</li>
                <li>Gestion des stocks et approvisionnements.</li>
                <li>Traitement et suivi des commandes.</li>
                <li>Gestion d'une chaine de production (publicité directe)</li>
            </ul>
            </div>
        </div>

        <div class="exp-4">
            <span class="date"><em class="time">2010</em><br />Assistant Chef de publicité</span>
            <div class="bulle"></div>
            <div class="taches">
            <strong>SCH communication</strong>
            <ul>
                <li>Prospection et relance téléphonique.</li>
                <li>Participation à la mise en place d’une campagne promotionnelle.</li>
                <li>Pose de divers éléments de signalétique.</li>
            </ul>
            </div>
        </div>

        <div class="exp-5">
            <span class="date"><em class="time">2009</em><br />Assistant Chef de rayon</span>
            <div class="bulle"></div>
            <div class="taches">
            <strong>Picwic</strong>
            <ul>
                <li>Gestion du planning commercial.</li>
                <li>Création d’un plan d’implantation rayon.</li>
                <li>Gestion relation clientèle.</li>
                <li>Gestion événementielle.</li>
            </ul>
            </div>
        </div>
        </section>
        <lightFooterBar />
    </div>
</template>

<script>
import Nav from '@/components/Nav.vue';
import Foot from '@/components/FootLight.vue';

export default {
  components: {
    navigator: Nav,
    lightFooterBar: Foot,
  },
};
</script>

<style scoped>
.experiences {
  background-color: var(--col-3);
  color: var(--light-1);
}
.bulle {
  background-color: var(--light-1);
  border-radius: 100%;
  height: 8px;
  margin: 0 20px;
  min-height: 8px;
  min-width: 8px;
  width: 8px;
}

[class^='exp-'] {
  -webkit-box-align: baseline;
  -ms-flex-align: baseline;
  align-items: baseline;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin: 2.5em auto;
  width: 70%;
  padding-left: 5rem;
}

[class^='exp-']:last-child {
  margin-bottom: 0;
  padding-bottom: 40px;
}

.experiences strong {
  color: var(--col-1);
  font-size: 1.3em;
  letter-spacing: 1.5px;
}

.experiences h3 {
  font-size: 1.1em;
  font-weight: normal;
  margin: 5px 0;
  text-decoration: underline;
}

.time {
  color: var(--col-2);
  font-size: 1em;
  font-weight: bold;
  text-transform: none;
}

.experiences li {
  font-weight: 300;
  list-style-type: '-   ';
  padding: 0.4em 0;
}

.date {
  font-size: 1.1em;
  line-height: 25px;
  max-width: 220px;
  min-width: 220px;
  padding: 0;
  text-align: end;
}
/* Mobile */
@media screen and (max-width: 768px) {
  .experiences {
    background-color: var(--col-3);
  }

  [class^='exp-'] {
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
    padding-left: 0;
  }

  [class^='form-'] {
    border-bottom: var(--col-3) 1px solid;
  }

  [class^='exp-']:last-child {
    border-bottom: none;
  }

  .experiences {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }

  .time {
    font-size: 0.5em;
    color: var(--col-2);
  }

  .date {
    display: inline-block;
    font-size: 1.6em;
    font-weight: bold;
    letter-spacing: 3px;
    max-width: none;
    min-width: none;
    padding: 0.8em 0 0;
    text-align: center;
    width: 100%;
  }

  .bulle {
    display: none;
  }

  .experiences strong {
    color: var(--col-1);
    display: inline-block;
    font-size: 1.4em;
    letter-spacing: 2px;
    padding-top: 1.2em;
    text-align: center;
    width: 100%;
  }

  .experiences li {
    font-size: 1em;
    margin: auto;
    padding: 0.5em 0;
    width: 100%;
  }

  .experiences li:first-child {
    padding-top: 1em;
  }

  .experiences li:last-child {
    padding-bottom: 1em;
  }

  .experiences h3 {
    font-size: 1.1em;
    font-weight: normal;
    letter-spacing: 2px;
    margin: 0 10%;
    padding: 1em 0 0 0;
    text-align: center;
    text-decoration: underline;
  }
}
/* TABLETTE */
@media screen and (max-width: 1024px) {
  [class^='exp-'] {
    margin: 1.5em auto;
    width: 90%;
    padding-left: 0;
  }
  [class^='exp-']:last-child {
    margin-bottom: 0;
  }
  .experiences li {
    max-width: 80%;
  }
}
</style>
