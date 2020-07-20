var $ = (elem) => {
    return document.querySelector(elem)
};

(function(){

    $('#sf-btn').addEventListener('click', () => {
        $('.app').classList.toggle('app-desc');
        $('.filters').classList.toggle('active-filters');
    });
   
    var d = document,
        tabs = $('.tabs'),
        tab = d.querySelectorAll('.tab');


    tabs.addEventListener('click', function(e) {

        if (e.target && e.target.nodeName === 'SPAN') {
          for (var i = 0; i < tab.length; i++) {
            tab[i].classList.remove('factive');
          }
          e.target.classList.toggle('factive');
        }  
    });

})();