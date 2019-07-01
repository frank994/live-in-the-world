function loadLivere() {
  if (typeof window !== 'undefined') {
    (function(d, s) {
      var j, e = d.getElementsByTagName(s)[0];
      if (typeof LivereTower === 'function') { return; }
    
      j = d.createElement(s);
      j.src = 'https://cdn-city.livere.com/js/embed.dist.js';
      j.async = true;
    
      e.parentNode.insertBefore(j, e);
    })(document, 'script');
    
    (function appDivToApp(document) {
      const body = document.getElementsByTagName('body')[0];
      const liveReContainer = document.createElement('div');
      if (body.clientWidth > 475) {
        setTimeout(() => {
          const aside = document.getElementsByClassName('sidebar')[0];
          const { clientWidth } = aside;
          // liveReContainer.style
          liveReContainer.style.marginLeft = `${clientWidth}px`;
        }, 1000);
      }
      liveReContainer.id = 'lv-container';
      liveReContainer.setAttribute('data-id', 'city');
      liveReContainer.setAttribute('data-uid', 'MTAyMC80NDkyNS8yMTQ0Nw==');
      body.appendChild(liveReContainer);
    })(document);
  }
}
// loadLivere();
