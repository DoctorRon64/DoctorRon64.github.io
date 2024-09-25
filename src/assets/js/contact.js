// Function to create the footer
function createFooter(addSocialClass) {
    const footer = document.createElement('footer');

    // Add the class if addSocialClass is true
    if (addSocialClass) {
        footer.className = 'social-footer'; // Use the correct class name
    }

    const ul = document.createElement('ul');
    ul.className = 'social-icons';

    const socialLinks = [
        { href: 'mailto:philip@lefthandmedia.com', title: 'Email me', imgSrc: '/assets/img/icons/fxemoji--email.svg', alt: 'Email Icon' },
        { href: 'https://www.linkedin.com/in/philip-de-groot-84272130b/', title: 'LinkedIn', imgSrc: '/assets/img/icons/devicon--linkedin.svg', alt: 'LinkedIn Icon', target: '_blank' },
        { href: 'https://github.com/DoctorRon64', title: 'GitHub', imgSrc: '/assets/img/icons/skill-icons--github-dark.svg', alt: 'GitHub Icon', target: '_blank' },
        { href: 'https://open.spotify.com/artist/6szCm5FAd4pBlQw6US2DPw?si=tF8kTzDnS-mFpSLxSeZKBQ', title: 'Spotify', imgSrc: '/assets/img/icons/logos--spotify-icon.svg', alt: 'Spotify Icon', target: '_blank' },
        { href: 'https://doctor-ron.itch.io/', title: 'Itch.Io', imgSrc: '/assets/img/icons/cib--itch-io.svg', alt: 'Itch.io Icon', target: '_blank', style: 'fill: #fa5c5c;' }
    ];

    // Create the list items and images
    socialLinks.forEach(link => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = link.href;
        a.title = link.title;
        if (link.target) a.target = link.target;

        const img = document.createElement('img');
        img.src = link.imgSrc;
        img.width = 40;
        img.height = 40;
        img.className = 'imgIcons';
        img.alt = link.alt;

        if (link.style) img.style.cssText = link.style;

        a.appendChild(img);
        li.appendChild(a);
        ul.appendChild(li);
    });

    footer.appendChild(ul);
    document.body.appendChild(footer);
}

// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Find the script tag that is currently executing
    const scripts = document.getElementsByTagName('script');
    let currentScript;

    // Loop through scripts to find the current one
    for (let i = 0; i < scripts.length; i++) {
        if (scripts[i].src.includes('contact.js')) {
            currentScript = scripts[i];
            break;
        }
    }

    // If the script tag was found, read the footerclass attribute
    if (currentScript) {
        const footerClassAttr = currentScript.getAttribute('footerclass'); // Get custom attribute
        const addClass = footerClassAttr === 'true'; // Convert string to boolean

        // Create the footer based on the attribute
        createFooter(addClass);
    }
});