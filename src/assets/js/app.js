function Portfolio() {
  // console.log('start portfolio');
  let items = [];
  let HTMLitems = undefined;

  function buildmenu(items) {
    // console.log('buildmenu');
    var portfoliomenu = document.getElementById("portfolioMenu");
    items.forEach(item => {
      const btn = document.createElement('div');
      btn.classList.add('portfolioMenu__btn')
      btn.dataset.itemId = item.id;
      btn.addEventListener('click', selectItem);
      btn.innerHTML = `<span> ${item.dataset.title} </span>`;
      portfoliomenu.appendChild(btn)
    });
  }

  function buildPortfolio() {
    // console.log('buildPortfolio');
    var container = document.getElementById("portfolio");
    HTMLitems = container.children;
    items = [...HTMLitems];
    hideAllItems();
    buildmenu(items);
  }

  function hideAllItems() {
    // console.log('hideAllItems');
    items.forEach(item => {
      item.style.display = 'none'
    });
  }

  function selectItem(evt) {
    chosenId = evt.target.dataset.itemId;
    hideAllItems();
    const item = HTMLitems[chosenId];
    item.style.display = 'block'
  }

  buildPortfolio();

}



function changeIframeSrc(src) {
  document.getElementById('iframeContent').src = src;
  document.querySelectorAll('.selectButton a').forEach(button => {
    button.classList.remove('disabled');
  });
  document.getElementById(`${src.split('/')[1].split('.')[0]}Btn`).classList.add('disabled');
}

function adjustIframeHeight() {
  var iframe = document.getElementById('iframeContent');
  iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
}

window.addEventListener('scroll', function () {
  var button = document.querySelector('.scrollButton');
  if (window.scrollY < 100) {
    button.style.opacity = '0';
  } else {
    button.style.opacity = '1';
  }
});


document.addEventListener("DOMContentLoaded", Portfolio);

adjustIframeHeight();
document.getElementById('iframeContent').addEventListener('load', adjustIframeHeight);
changeIframeSrc('Proj/code.html');
