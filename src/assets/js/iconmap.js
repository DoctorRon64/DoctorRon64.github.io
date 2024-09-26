export const techIconsMap = {
    'animate': 'logos--adobe-animate.svg',
    'arduino': 'skill-icons--arduino.svg',
    'assimp': 'header.svg',
    'aseprite': 'aseprite.png',
    'blender': 'logos--blender.svg',
    'c#': 'devicon--csharp.svg',
    'c++': 'vscode-icons--file-type-cpp3.svg',
    'cmake': 'devicon--cmake.svg',
    'css': 'skill-icons--css.svg',
    'flstudio': 'flstudio.png',
    'git': 'skill-icons--git.svg',
    'github': 'skill-icons--github-dark.svg',
    'glm': 'glm-logo.svg',
    'glfw': 'glfw.jpg',
    'stbi': 'header.svg',
    'html': 'skill-icons--html.svg',
    'illustrator': 'skill-icons--illustrator.svg',
    'java': 'skill-icons--java-light.svg',
    'javascript': 'skill-icons--javascript.svg',
    'json': 'bi--filetype-json.svg',
    'maui': 'skill-icons--dotnet.svg',
    'mysql': 'skill-icons--mysql-dark.svg',
    'network': 'fluent-mdl2--network-tower.svg',
    'nodejs': 'skill-icons--nodejs-light.svg',
    'opengl': 'logos--opengl.svg',
    'photoshop': 'skill-icons--photoshop.svg',
    'processing': 'skill-icons--processing-light.svg',
    'scss': 'vscode-icons--file-type-scss2.svg',
    'sfml': 'sfml.png',
    'unity': 'skill-icons--unity-light.svg',
    'yaml': 'devicon--yaml.svg',
    'vs': 'devicon--visualstudio.svg',
    'vscode': 'logos--visual-studio-code.svg',
    'fork': 'fork.png',
    'drawio': 'vscode-icons--file-type-drawio.svg',
    'windows': 'devicon--windows8.svg',
    'rider': 'logos--rider.svg',
    'plantuml': 'vscode-icons--file-type-plantuml.svg',
    'linux': 'flat-color-icons--linux.svg',
    'batch': 'bat.svg',
    'eclipse': 'devicon--eclipse.svg',
    'lua': 'logos--lua.svg',
    'premierepro': 'skill-icons--premiere.svg',
    'aftereffects': 'logos--adobe-animate.svg',
    'paintnet': 'paintnet.png',
    'krita': 'krita.png',
    'dutch': 'dutch.svg',
    'en': 'en.svg',
    'spain': 'spain.svg',
    'python': 'python.svg',
    'menu' : 'gg--menu.svg',
    'close' : 'zondicons--close-outline.svg',
};

export function iconString(tech, color = '', width = '24px', height = '24px') {
    console.log('iconString called with:', tech); // Add this line
    const style = color ? ` style="color: ${color}"` : '';
    const iconKey = tech.trim().toLowerCase(); // convert input to lowercase for map lookup
    const iconSrc = techIconsMap[iconKey]; // get corresponding icon from the map

    if (iconSrc && typeof iconSrc === 'string') {
        return `<img src="/assets/img/icons/${iconSrc}" width="${width}" title="${tech}" height="${height}" class="imgIcons"${style}>`;
    }
    return getDefaultIcon(tech);
}

function getDefaultIcon(name) {
    return `
        <svg title="${name}" width="24" height="24" viewBox="0 0 32 32">
            <rect x="0" y="0" width="32" height="32" fill="#fb3ef9"/>
            <rect x="0" y="16" width="16" height="16" fill="#000"/>
            <rect x="16" y="0" width="16" height="16" fill="#000"/>
        </svg>`;
}