<template>
  <nav>
    <div id="toggle"></div>
    <div id="sidebar">
      <ul class="nav-links">
        <li><router-link to="/" id="home">Accueil</router-link></li>
        <li><router-link to="/experiences">Expériences</router-link></li>
        <li><router-link to="/formations">Formations</router-link></li>
        <li><router-link to="/competences">Compétences</router-link></li>
        <li><router-link to="/Portfolio">Portfolio</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigator',
  mounted() {
    const toggle = document.getElementById('toggle');
    const sidebar = document.getElementById('sidebar');

    document.addEventListener('click', (e) => {
      if (e.target.id !== 'sidebar' && e.target.id !== 'toggle') {
        toggle.classList.remove('active');
        sidebar.classList.remove('active');
      }
    });
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('active');
      sidebar.classList.toggle('active');
    });
  },
};
</script>

<style scoped>
nav {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: var(--col-3);
  border-bottom: 1px var(--light-1) solid;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  min-height: 5rem;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 5;
}

#sidebar {
  width: 100%;
}

.nav-links {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 100%;
}

.nav-links li {
  list-style: none;
}

.nav-links a {
  color: var(--light-1);
  font-size: 1.3em;
  letter-spacing: 3px;
  padding: 0 0.8em;
  text-decoration: none;
}

.nav-links a:hover {
  color: var(--col-1);
}
a.router-link-exact-active {
  color: var(--col-1);
}
/* RESPONSIVE */
@media screen and (max-width: 1024px) {
  nav {
    background-color: var(--col-3);
    background: -o-radial-gradient(
        circle,
        transparent 20%,
        #333d50 20%,
        #333d50 80%,
        transparent 80%,
        transparent
      ),
      -o-radial-gradient(
          circle,
          transparent 20%,
          #333d50 20%,
          #333d50 80%,
          transparent 80%,
          transparent
        ) 12.5px 12.5px,
      -o-linear-gradient(#707784 1px, transparent 1px) 0 -0.5px,
      -o-linear-gradient(left, #707784 1px, #333d50 1px) -0.5px 0;
    background: radial-gradient(
        circle,
        transparent 20%,
        #333d50 20%,
        #333d50 80%,
        transparent 80%,
        transparent
      ),
      radial-gradient(
          circle,
          transparent 20%,
          #333d50 20%,
          #333d50 80%,
          transparent 80%,
          transparent
        )
        12.5px 12.5px,
      linear-gradient(#707784 1px, transparent 1px) 0 -0.5px,
      linear-gradient(90deg, #707784 1px, #333d50 1px) -0.5px 0;
    background-size: 25px 25px, 25px 25px, 12.5px 12.5px, 12.5px 12.5px;
    max-height: 61px;
    min-height: 61px;
  }
  #toggle {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: var(--col-1);
    cursor: pointer;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 60px;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    left: 0;
    position: fixed;
    top: 0;
    width: 60px;
    z-index: 5;
  }
  #toggle::before {
    background-color: white;
    content: '';
    height: 3px;
    position: absolute;
    -webkit-transform: translateY(-5px);
    -ms-transform: translateY(-5px);
    transform: translateY(-5px);
    -webkit-transition: 0.2s;
    -o-transition: 0.2s;
    transition: 0.2s;
    width: 30px;
  }
  #toggle::after {
    background-color: white;
    content: '';
    height: 3px;
    position: absolute;
    -webkit-transform: translateY(5px);
    -ms-transform: translateY(5px);
    transform: translateY(5px);
    -webkit-transition: 0.2s;
    -o-transition: 0.2s;
    transition: 0.2s;
    width: 30px;
  }
  #toggle.active::before {
    -webkit-transform: translateY(0px) rotate(45deg);
    -ms-transform: translateY(0px) rotate(45deg);
    transform: translateY(0px) rotate(45deg);
  }
  #toggle.active::after {
    -webkit-transform: translateY(0px) rotate(-45deg);
    -ms-transform: translateY(0px) rotate(-45deg);
    transform: translateY(0px) rotate(-45deg);
  }
  #sidebar {
    background-color: var(--col-3);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    left: -100%;
    min-height: 100%;
    position: fixed;
    top: 0;
    -webkit-transition: 0.5s;
    -o-transition: 0.5s;
    transition: 0.5s;
    width: 90%;
  }
  #sidebar.active {
    left: 0px;
  }
  #sidebar ul {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin-top: 8vh;
    padding: 0;
    position: relative;
  }
  #sidebar ul li {
    padding: 3.5vh 0;
    text-align: center;
    width: 100%;
  }
  #sidebar ul li:hover {
    background-color: var(--col-1);
  }
  #sidebar ul li a {
    color: #fff;
    font-size: 1.5em;
    letter-spacing: 2px;
    text-decoration: none;
  }
}
</style>
