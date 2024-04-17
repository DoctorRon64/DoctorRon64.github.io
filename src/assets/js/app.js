// Portfolio Functionality
function Portfolio() {
    // Variables
    let items = [];
    let HTMLitems = null;
    const portfolioContainer = document.getElementById("portfolio");

    // Build Portfolio Menu
    function buildMenu(items) {
        const portfolioMenu = document.getElementById("portfolioMenu");
        items.forEach(item => {
            const btn = document.createElement('div');
            btn.classList.add('portfolioMenu__btn');
            btn.dataset.itemId = item.id;
            btn.addEventListener('click', selectItem);
            btn.innerHTML = `<img src="${item.dataset.src}">`;
            portfolioMenu.appendChild(btn);
        });
    }

    // Build Portfolio
    function buildPortfolio() {
        HTMLitems = portfolioContainer.children;
        items = [...HTMLitems];
        hideAllItems();
        buildMenu(items);
    }

    // Hide All Portfolio Items
    function hideAllItems() {
        items.forEach(item => {
            item.style.display = 'none';
        });
    }

    // Select Portfolio Item
    function selectItem(evt) {
        let target = evt.target;
        if (target.tagName === 'IMG') {
            target = target.parentElement;
        }
        const chosenId = target.dataset.itemId;
        hideAllItems();
        console.log("item" , HTMLitems, chosenId);
        const item = HTMLitems[chosenId];
        console.log("item", item);
        item.style.display = 'block';
    }

    // Initialize Portfolio
    if (portfolioContainer) {
        buildPortfolio();
    }
}

// Iframe Functionality
function changeIframeSrc(src) {
    document.getElementById('iframeContent').src = src;
    document.querySelectorAll('.selectButton a').forEach(button => {
        button.classList.remove('disabled');
    });
    document.getElementById(`${src.split('/')[1].split('.')[0]}Btn`).classList.add('disabled');
}

function adjustIframeHeight() {
    const iframe = document.getElementById('iframeContent');
    if (iframe) {
        iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
    }
}

// Scroll Button Functionality
window.addEventListener('scroll', function() {
    var button = document.querySelector('.scrollButton');
    if (window.scrollY < 100) {
        button.style.opacity = '0';
    } else {
        button.style.opacity = '1';
    }
});

document.addEventListener("DOMContentLoaded", Portfolio);

const iframe = document.getElementById('iframeContent');
if (iframe) {
    adjustIframeHeight();
    changeIframeSrc('Proj/code.html');
    iframe.addEventListener('load', adjustIframeHeight);
}