var $ = (elem) => {
    return document.querySelector(elem)
};

(function(){

    $('.p-btn').addEventListener('click', () => {
        $('.cover').classList.add('cactive')
        $('.profile-sidebar').classList.add('ps-active')

    });

    $('.sidebar-close').addEventListener('click', () => {
        $('.profile-sidebar').classList.remove('ps-active')
        $('.cover').classList.remove('cactive')
    });

    $('#app').addEventListener("click", () => {
        $('.profile-sidebar').classList.remove('ps-active')
        $('.cover').classList.remove('cactive')
    })

    var d = document,
        tabs = $('.tabs'),
        tab = d.querySelectorAll('.p-nav-link'),
        contents = d.querySelectorAll('.p-nav-content');

    tabs.addEventListener('click', function(e) {

        if (e.target && e.target.nodeName === 'A') {
          for (var i = 0; i < tab.length; i++) {
            tab[i].classList.remove('p-nav-link-active');
          }
          e.target.classList.toggle('p-nav-link-active');
          for (i = 0; i < contents.length; i++) {
            contents[i].classList.remove('p-nav-t-active');
          }
          
          var tabId = '#' + e.target.dataset.tabId;
   $(tabId).classList.toggle('p-nav-t-active'); 
        }  
    });

})();
