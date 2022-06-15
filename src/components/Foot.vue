<template>
  <div class="vue__footer__container">
    <div class="socials-wrapper">
      <div class="logo">
        <h3>Edouard Herrengt</h3>
        <p><strong>Dev Web full stack</strong></p>
      </div>
      <div class="contact">
        <h3>Me contacter :</h3>
        <ul>
          <li>
            <a href="mailto:herrengt.edouard@gmail.com?" target="_blank">Email</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/edouard-herrengt-446716168/" target="_blank"
              >LinkedIn</a
            >
          </li>
          <li>
            <a href="https://twitter.com/Bobely89" target="_blank">Twitter</a>
          </li>
          <li>
            <a href="https://github.com/EdouardHrgt" target="_blank">GitHub</a>
          </li>
          <li>
            <a href="https://www.instagram.com/edouard_herrengt/?hl=fr" target="_blank"
              >Instagram</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footerBar',
};
</script>

<style scoped>
.socials-wrapper {
  background-color: var(--col-3);
  height: 300px;
  padding-top: 3rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  -webkit-box-pack: space-evenly;
  -ms-flex-pack: space-evenly;
  justify-content: space-evenly;
}
.logo,
.contact {
  width: 300px;
}
.logo,
.contact h3 {
  font-size: 1.8rem;
  color: var(--light-1);
  letter-spacing: 1.5px;
}
.logo p strong {
  color: var(--col-1);
  font-size: 1.3rem;
}

.contact ul li {
  list-style: none;
  margin: 0.5rem 0;
}
.contact ul li a {
  color: var(--light-2);
  font-size: 1rem;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
}
.contact ul li a:hover {
  color: var(--col-1);
}

@media screen and (max-width: 1024px) {
  .logo,
  .contact {
    width: auto;
  }
}
@media screen and (max-width: 768px) {
  .socials-wrapper {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
  }
  .logo,
  .contact {
    padding-left: 1rem;
    margin-bottom: 1rem;
  }
}
</style>
