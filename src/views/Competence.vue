<template lang="fr">
    <div class="vue__competences__container">
        <navigator />
        <section class="competences" id="_competences">
            <h2 class="sub-title">Compétences</h2>

            <div class="skills-wrapper">

                <div class="skills">
                    <p>Html - Css</p>
                    <div class="percent">
                    <div class="progress html">
                        <p>75%</p>
                    </div>
                    </div>
                </div>

                <div class="skills">
                    <p>JavaScript</p>
                    <div class="percent">
                    <div class="progress javascript">
                        <p>60%</p>
                    </div>
                    </div>
                </div>

                <div class="skills">
                    <p>Vue.js</p>
                    <div class="percent">
                    <div class="progress vue">
                        <p>70%</p>
                    </div>
                    </div>
                </div>

                <div class="skills">
                    <p>Node.js</p>
                    <div class="percent">
                    <div class="progress node">
                        <p>70%</p>
                    </div>
                    </div>
                </div>

                <div class="skills">
                    <p>Sql / No Sql</p>
                    <div class="percent">
                    <div class="progress sql">
                        <p>60%</p>
                    </div>
                    </div>
                </div>

                <div class="skills">
                    <p>Anglais</p>
                    <div class="percent">
                    <div class="progress anglais">
                        <p>80%</p>
                    </div>
                    </div>
                </div>

                <div class="skills">
                    <p>Gestion de projet</p>
                    <div class="percent">
                    <div class="progress projet">
                        <p>70%</p>
                    </div>
                    </div>
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
.competences {
  background-color: var(--col-3);
  color: var(--light-1);
  width: 100%;
  min-height: 100vh;
}

.skills-wrapper {
  margin-top: 3.5rem;
}

.skills {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  color: var(--light-1);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  font-size: 1.3em;
  height: 3em;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin: 15px auto;
  width: 100%;
}

.skills > p {
  text-align: end;
  width: 8em;
}

.percent {
  height: 0.6em;
  margin: 0 3%;
  width: 60%;
}

.progress {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: var(--col-1);
  -webkit-box-shadow: var(--col-1) 1px 1px 2px;
  box-shadow: var(--col-1) 1px 1px 2px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 100%;
  position: relative;
}

.progress > p {
  font-size: 0.9rem;
  position: absolute;
  right: -40px;
  opacity: 0;
  animation: percentFadeIn 4s 1.5s forwards;
  -webkit-animation: percentFadeIn 3s 1.5s forwards;
}

.html {
  width: 75%;
  -webkit-animation: loading_75 1.5s ease-in forwards;
  animation: loading_75 1.5s ease-in forwards;
}

.javascript {
  width: 60%;
  -webkit-animation: loading_60 1.5s ease-in forwards;
  animation: loading_60 1.5s ease-in forwards;
}

.vue {
  width: 70%;
  -webkit-animation: loading_70 1.5s ease-in forwards;
  animation: loading_70 1.5s ease-in forwards;
}

.node {
  width: 70%;
  -webkit-animation: loading_70 1.5s ease-in forwards;
  animation: loading_70 1.5s ease-in forwards;
}

.sql {
  width: 60%;
  -webkit-animation: loading_60 1.5s ease-in forwards;
  animation: loading_60 1.5s ease-in forwards;
}

.anglais {
  width: 80%;
  -webkit-animation: loading_80 1.5s ease-in forwards;
  animation: loading_80 1.5s ease-in forwards;
}

.projet {
  width: 70%;
  -webkit-animation: loading_70 1.5s ease-in forwards;
  animation: loading_70 1.5s ease-in forwards;
}
/* MOBILE */
@media screen and (max-width: 768px) {
  .competences {
    background-color: var(--col-3);
  }
  .skills-wrapper {
    margin-top: 3rem;
  }
  .skills {
    padding: 2em 0;
    font-size: 1.1em;
  }

  .skills > p {
    text-align: end;
    width: 8em;
  }

  .percent {
    height: 0.6em;
    margin: 0 3%;
    width: 55%;
  }
}

@-webkit-keyframes loading_50 {
  0% {
    width: 0;
  }
  100% {
    width: 50%;
  }
}

@keyframes loading_50 {
  0% {
    width: 0;
  }
  100% {
    width: 50%;
  }
}
@-webkit-keyframes loading_60 {
  0% {
    width: 0;
  }
  100% {
    width: 60%;
  }
}
@keyframes loading_60 {
  0% {
    width: 0;
  }
  100% {
    width: 60%;
  }
}
@-webkit-keyframes loading_70 {
  0% {
    width: 0;
  }
  100% {
    width: 70%;
  }
}
@keyframes loading_70 {
  0% {
    width: 0;
  }
  100% {
    width: 70%;
  }
}
@-webkit-keyframes loading_75 {
  0% {
    width: 0;
  }
  100% {
    width: 75%;
  }
}
@keyframes loading_75 {
  0% {
    width: 0;
  }
  100% {
    width: 75%;
  }
}
@-webkit-keyframes loading_80 {
  0% {
    width: 0;
  }
  100% {
    width: 80%;
  }
}
@keyframes loading_80 {
  0% {
    width: 0;
  }
  100% {
    width: 80%;
  }
}
@keyframes percentFadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@-webkit-keyframes percentFadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
