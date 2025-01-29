class Navbar {
    constructor(menuItems) {
        this.menuItems = menuItems;
    }

    async fetchSvg(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
            return await response.text();
        } catch (error) {
            console.error(`Error loading SVG: ${url}`, error);
            return ''; // Return empty if SVG fails to load
        }
    }

    async createNav() {
        // Create <nav> element
        const nav = document.createElement('nav');
        nav.className = 'navbar';

        // Create <ul> element
        const ul = document.createElement('ul');
        ul.className = 'navbar-nav';

        // Loop through menuItems and generate nav items
        for (const item of this.menuItems) {
            const li = document.createElement('li');
            li.className = 'nav-item';

            const a = document.createElement('a');
            a.href = item.href;
            a.className = 'nav-link';

            // Fetch and embed inline SVG
            const svgContainer = document.createElement('span');
            svgContainer.className = 'icon';
            svgContainer.innerHTML = await this.fetchSvg(item.icon);

            // Create span for text
            const span = document.createElement('span');
            span.className = 'link-text';
            span.textContent = item.text;

            // Append elements
            a.appendChild(svgContainer);
            a.appendChild(span);
            li.appendChild(a);
            ul.appendChild(li);
        }

        // Append everything to the navbar
        nav.appendChild(ul);
        document.body.appendChild(nav);
    }
}

// Navbar items
const menuItems = [
    { href: '/index.html', text: 'Home', icon: 'assets/img/icons/tabler/tabler--home.svg' },
    { href: '/about.html', text: 'About', icon: 'assets/img/icons/tabler/tabler--info-circle.svg' },
    { href: '/overview.html', text: 'Overview', icon: 'assets/img/icons/tabler/tabler--clipboard-list.svg' },
    { href: '/music.html', text: 'Music', icon: 'assets/img/icons/tabler/tabler--music.svg' },
    { href: '/games.html', text: 'Games', icon: 'assets/img/icons/tabler/tabler--device-gamepad.svg' },
    { href: '/uc.html', text: 'Art', icon: 'assets/img/icons/tabler/tabler--pencil-code.svg' }
];

// Instantiate and create navbar
const navbar = new Navbar(menuItems);
navbar.createNav();
