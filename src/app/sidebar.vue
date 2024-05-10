<template>
 <div :class="headerClass" class="sidebar" id="sidebar">

  </div>

</template>

<script>

    export default {
        name: 'Home',
        data() {
    return {
      submenu: false,
      screenSize: "",
      isActive: false,
    };
  },
  methods: {
    showsubmenu: function () {
      this.submenu = !this.submenu;
      // some code to filter users
    },
    updateScreenSize() {
      if (window.innerWidth <= 1024) {
        this.screenSize = "mobile";
        this.isActive = true;
      } else {
        this.screenSize = "desktop";
        this.isActive = false;
      }
    },
  },
  mounted() {
    this.updateScreenSize();
    window.addEventListener("resize", this.updateScreenSize);
  },

  computed: {
    headerClass() {
      return {
        "header-mobile": this.screenSize === "mobile",
        "header-desktop": this.screenSize === "desktop",
      };
    },
  },
    }
</script>

<style >
:root {
  --body-font: "Open Sans", sans-serif;
}

.body-pd .sidebar-head span {
  display: block;
}
.header-mobile {
  top: calc(var(--nav-width) - 2px);
  margin-left: -15px;
}
.sidebar-head {
  padding: 15px;
  padding-right: 0px;
  border-bottom: 1px solid var(--border-color);
  height: var(--header-height);
  display: flex;
  align-items: baseline;
}

.sidebar-head img {
  height: 25px;
}

.sidebar-head span {
  color: white;
  text-transform: uppercase;
  font-size: 12px;
  margin-left: 10px;
  display: none;
  float: right;
}

.header_toggle {
  position: absolute;
  border: 1px solid var(--border-color);
  top: var(--header-height);
  left: calc(100% - 12.5px);
  width: 25px;
  /*        height: 25px;*/
  border-radius: 10%;
  background-color: var(--primary-color);
  transform: translateY(-50%);
  text-align: center;
  box-shadow: 0px 0px 15px rgb(149 157 165 / 30%),
    inset 0px 0px 4px rgb(149 157 165 / 5%);
  transition: all 0.5s ease;
  cursor: pointer;
  visibility: visible;
  display: flex;
}

.header_toggle .icon {
  margin: auto;
  transition: all 0.5s ease;
  color: var(--border-color);
  text-align: center;
  font-size: 14px;
}

.sidebar.close .header_toggle .icon {
  transform: rotate(-180deg);
}

.sidebar .nav-links {
  height: 100%;
  padding: 10px;
  overflow: auto;
  margin-top: 10px;
}

.sidebar.close .nav-links {
  overflow: visible;
}

.sidebar .nav-links::-webkit-scrollbar {
  display: none;
}

.sidebar .nav-links li.nav-link {
  position: relative;
  list-style: none;
  transition: all 0.4s ease;
  padding: 0.7rem;
}

.sidebar .nav-links li .iocn-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.sidebar.close .nav-links li .iocn-link {
  display: block;
}

.sidebar .nav-links li i {
  cursor: pointer;
  transition: all 0.3s ease;
  color: var(--white-color);
  font-size: 12px;
}

.sidebar .nav-links li img {
  height: 18px;
  width: 18px;
  font-size: 0 !important;
}

.sidebar .nav-links li.active {
  background-color: #1c58afa3;
  border-radius: 3px;
}

.sidebar .nav-links li:hover {
  background-color: #1c58afa3;
  border-radius: 3px;
}

.sidebar .nav-links li.showMenu .bi-chevron-right {
  transform: rotate(-90deg);
}

.sidebar.close .nav-links li .bi-chevron-right {
  display: none;
}

.sidebar .nav-links li a {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.sidebar .nav-links li a .link_name {
  font-size: 14px;
  font-weight: 400;
  color: var(--white-color);
  transition: all 0.4s ease;
  padding-left: 1.5rem;
}

.sidebar.close .nav-links li a .link_name {
  display: none;
  opacity: 0;
  pointer-events: none;
}

.sidebar .nav-links li .sub-menu {
  padding: 6px 6px 0px 25px;
  display: none;
}

.sidebar .nav-links li .sub-menu li {
  list-style: none;
}

.sidebar .nav-links li.showMenu .sub-menu {
  display: block;
}

.sidebar .nav-links li .sub-menu a {
  color: var(--white-color);
  font-size: 15px;
  padding: 5px 0;
  white-space: nowrap;
  opacity: 0.6;
  transition: all 0.3s ease;
}

.sidebar .nav-links li .sub-menu a {
  color: var(--white-color);
}

.sidebar .nav-links li .sub-menu a:hover {
  opacity: 1;
}

.sidebar.close .nav-links li .sub-menu {
  position: absolute;
  left: 100%;
  top: -10px;
  margin-top: 0;
  padding: 10px 20px;
  border-radius: 0 6px 6px 0;
  opacity: 0;
  display: block;
  pointer-events: none;
  transition: 0s;
}

.sidebar.close .nav-links li:hover .sub-menu {
  top: 0;
  opacity: 1;
  pointer-events: auto;
  transition: all 0.4s ease;
}

.sidebar .nav-links li .sub-menu .link_name {
  display: none;
}

.sidebar.close .nav-links li .sub-menu {
  background: var(--primary-color);
}

.sidebar.close .nav-links li .sub-menu .link_name {
  font-size: 14px;
  opacity: 1;
  display: block;
}

.sidebar .nav-links li .sub-menu.blank {
  opacity: 1;
  pointer-events: auto;
  padding: 3px 20px 6px 16px;
  opacity: 0;
  pointer-events: none;
}

.sidebar .nav-links li:hover .sub-menu.blank {
  top: 50%;
  transform: translateY(-50%);
}

@media (max-width: 420px) {
  .sidebar.close .nav-links li .sub-menu {
    display: none;
  }
}

@media screen and (min-width: 420px) and (max-width: 1024px) {
  .sidebar .nav-links {
    padding: 10px 10px 10px 30px;
    width: var(--sidebar-width);
  }
}
</style>
