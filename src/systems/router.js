AFRAME.registerSystem('router', {
  schema: {
    routes: {
      type: 'array',
      default: [],
    },
    current: {
      type: 'string',
      default: '',
    },
  },

  init: function () {
    this.currentNode = null;
    this.collectRoutes();
  },

  collectRoutes: function () {
    this.routes = Array.from(document.querySelectorAll('*[route]'));
    this.changeRoute(this.data.current);
  },

  changeRoute: function (routeId) {
    if (this.currentNode) {
      this.currentNode.parentNode.removeChild(this.currentNode);
    }
    const route = this.routes.find(
      (route) => route.getAttribute('route') === routeId,
    );
    if (route) {
      const entity = document.createElement('a-entity');
      entity.setAttribute('route', routeId);
      entity.innerHTML = route.innerHTML.replace('<!--', '').replace('-->', '');
      this.currentNode = entity;
      this.sceneEl.appendChild(entity);
    }
  },
});
