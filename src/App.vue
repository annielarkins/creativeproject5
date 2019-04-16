<template>
  <div id="app">
<nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand">ATL</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <router-link to="/" class="nav-link">Home</router-link>
                </li>
                <li class="nav-item active">
                    <router-link to="/order" class="nav-link">Place Order</router-link>
                </li>
                <li class="nav-item active">
                    <router-link to="/vieworders" class="nav-link">View Orders</router-link>
                </li>
            </ul>
        </div>
    </nav>
    <router-view/>
                <div class="footer">
        <a href="https://github.com/annielarkins/creativeproject5">Github Repository</a>
    </div>
  </div>
</template>

<style>
#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.navbar {
    background-color: pink !important
}

.footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: pink;
    color: black;
}

</style>
