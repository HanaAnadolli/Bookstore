<template>
  <div class="dashboard">
    <div class="sidebar" :class="{ 'active': isSidebarActive, 'transition': isSidebarTransition }">
      <div class="sidebar-header">
        <h3>Dashboard</h3>
        <div class="close-sidebar" @click="closeSidebar">
          <i class="fas fa-times"></i>
        </div>
      </div>
      <div class="sidebar-menu">
        <ul>
          <li>
            <router-link to="/">
              <i class="fas fa-tachometer-alt"></i>
              <span>Home</span>
            </router-link>
          </li>
          <li>
            <router-link to="/list">
              <i class="fas fa-cog"></i>
              <span>Shop List</span>
            </router-link>
          </li>
          <li>
            <router-link to="/listContacts">
              <i class="fas fa-chart-bar"></i>
              <span>Contact List</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="main-content" :class="{ 'slide-in': isSidebarActive }">
      <div class="header">
        <div class="menu-toggle" @click="toggleSidebar">
          <i class="fas fa-bars"></i>
        </div>
        <h2>Dashboard</h2>
      </div>
      <div class="tables">
        <!-- your tables go here -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSidebarActive: false,
      isSidebarTransition: false
    }
  },
  methods: {
    toggleSidebar() {
      this.isSidebarActive = !this.isSidebarActive
      this.isSidebarTransition = true
    },
    closeSidebar() {
      this.isSidebarActive = false
      this.isSidebarTransition = true
    },
    endSidebarTransition() {
      this.isSidebarTransition = false
    }
  }
}
</script>

<style>
.dashboard {
  display: flex;
  height: 100vh;
}

.sidebar {
  width: 250px;
  height: 100%;
  background-color: #333;
  color: #fff;
  position: fixed;
  left: 0;
  top: 0;
  overflow-y: auto;
  z-index: 999;
  transition: all 0.3s ease-in-out;
}

.sidebar.active {
  transform: translateX(0);
}

.sidebar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid #444;
}

.sidebar-header h3 {
  margin: 0;
  font-size: 24px;
}

.close-sidebar {
  cursor: pointer;
}

.close-sidebar i {
  font-size: 20px;
}

.sidebar-menu ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.sidebar-menu li {
  margin: 0;
  padding: 0;
}

.sidebar-menu li a {
  display: flex;
  align-items: center;
  color: #fff;
  padding: 20px;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
}

.sidebar-menu li a:hover {
  background-color: #444;
}

.sidebar-menu li a i {
  margin-right: 10px;
  font-size: 20px;
}

.main-content {
  flex: 1;
  background-color: #f5f5f5;
  padding: 20px;
  transition: all 0.3s ease-in-out;
  margin-left: 250px;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.menu-toggle {
  cursor: pointer;
}

.menu-toggle i {
  font-size: 24px;
}

/* Table styles */
table {
  border-collapse: collapse;
  width: 100%;
  max-width: 100%;
  margin-bottom: 1rem;
  background-color: transparent;
}

th {
  vertical-align: bottom;
  border-bottom: 2px solid #dee2e6;
  text-align: left;
}

td {
  vertical-align: middle;
  border-bottom: 1px solid #dee2e6;
}

/* Responsive styles */
@media screen and (max-width: 768px) {
  .sidebar {
    width: 100%;
    height: auto;
    position: static;
    transform: none;
    overflow: visible;
    z-index: auto;
    transition: none;
  }
  
  .sidebar.active {
    margin-left: -250px;
    transform: none;
  }
  
  .main-content {
    margin-left: 0;
  }
  
  .sidebar-header {
    padding: 10px;
    border-bottom: none;
  }
  
  .sidebar-header h3 {
    font-size: 18px;
    margin-bottom: 10px;
  }
  
  .sidebar-menu {
    padding: 0;
  }
  
  .sidebar-menu ul {
    display: flex;
    flex-direction: column;
  }
  
  .sidebar-menu li a {
    padding: 10px;
  }
  
  .header {
    padding: 10px;
  }
  
  .menu-toggle i {
    font-size: 18px;
  }
}
</style>
