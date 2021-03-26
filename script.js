document.addEventListener('DOMContentLoaded', function () {
    let root = document.body.style;
    console.log(root);
  
    // pageOffset: 윈도우창에서 스크롤이 있는 페이지라면 스크롤된 x, y값
    // offestHeight: 해당 엘리먼트의 높이(border, padding, scroll bar 포함. 단,margin 제외)
    // innerHeight: 메뉴바, 툴바, 스크롤바의 크기를 제외한 window의 높이
    root.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
  
    // Scroll events
    window.addEventListener('scroll', scroll, false);
    function scroll() {
      root.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
    }
  });