<<<<<<< HEAD
// Make sure techIconsMap is defined before being used
export const techIconsMap = {
    'animate': 'logos--adobe-animate.svg',
    'arduino': 'skill-icons--arduino.svg',
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
    'python': 'python.svg'
};

export function iconString(tech, color = '', width = '32px', height = '32px') {
    const style = color ? ` style="color: ${color}"` : '';
    const iconKey = tech.trim().toLowerCase(); // convert input to lowercase for map lookup
    const iconSrc = techIconsMap[iconKey]; // get corresponding icon from the map

    if (iconSrc && typeof iconSrc === 'string') {
        return `<img src="/assets/img/icons/${iconSrc}" width="${width}" height="${height}" class="imgIcons"${style}>`;
    }

    return getDefaultIcon();
}

=======
// iconMap.js
export function iconString(icon, color = '', width = '32px', height = '32px') {
    const style = color ? ` style="color: ${color}"` : '';
    if (icon && typeof icon === 'string') {
        return `<img src="/assets/img/icons/${icon}" width="${width}" height="${height}" class="imgIcons"${style}>`;
    }
    return getDefaultIcon();
}

>>>>>>> 153f43b78b7aca3076e6030c4207078f342d0a8b
function getDefaultIcon() {
    return `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32">
            <rect x="0" y="0" width="32" height="32" fill="#fb3ef9"/>
            <rect x="0" y="16" width="16" height="16" fill="#000"/>
            <rect x="16" y="0" width="16" height="16" fill="#000"/>
        </svg>`;
}
<<<<<<< HEAD
=======

export const techIconsMap = {
    'animate': iconString("logos--adobe-animate.svg"),
    'arduino': iconString("skill-icons--arduino.svg"),
    'aseprite': iconString("aseprite.png"),
    'blender': iconString("logos--blender.svg"),
    'c#': iconString("devicon--csharp.svg"),
    'c++': iconString("vscode-icons--file-type-cpp3.svg"),
    'cmake': iconString("devicon--cmake.svg"),
    'css': iconString("skill-icons--css.svg"),
    'flstudio': iconString("flstudio.png"),
    'git': iconString("skill-icons--git.svg"),
    'github': iconString("skill-icons--github-dark.svg"),
    'glm': iconString('glm-logo.svg', '', '32px', '16px'), /*Enige uitzondering*/
    'html': iconString("skill-icons--html.svg"),
    'illustrator': iconString("skill-icons--illustrator.svg"),
    'java': iconString("skill-icons--java-light.svg"),
    'javascript': iconString("skill-icons--javascript.svg"),
    'json': iconString("bi--filetype-json.svg"),
    'maui': iconString("skill-icons--dotnet.svg"),
    'mysql': iconString("skill-icons--mysql-dark.svg"),
    'network': iconString("fluent-mdl2--network-tower.svg"),
    'nodejs': iconString("skill-icons--nodejs-light.svg"),
    'opengl': iconString("logos--opengl.svg"),
    'photoshop': iconString("skill-icons--photoshop.svg"),
    'processing': iconString("skill-icons--processing-light.svg"),
    'scss': iconString("vscode-icons--file-type-scss2.svg"),
    'sfml': iconString("sfml.png"),
    'unity': iconString("skill-icons--unity-light.svg"),
    'yaml': iconString("devicon--yaml.svg"),
    'vs' : iconString("devicon--visualstudio.svg"),
    'vscode' : iconString("logos--visual-studio-code.svg"),
    'fork' : iconString("fork.png"),
    'drawio' : iconString("vscode-icons--file-type-drawio.svg"),
    'windows' : iconString("devicon--windows8.svg"),
    'rider' : iconString("logos--rider.svg"),
    'plantuml' : iconString("vscode-icons--file-type-plantuml.svg"),
    'linux' : iconString("flat-color-icons--linux.svg"),
    'batch' : iconString("bat.svg"),
    'eclipse' : iconString("devicon--eclipse.svg"),
    'lua' : iconString("logos--lua.svg"),
    'premierepro' : iconString("skill-icons--premiere.svg"),
    'aftereffects' : iconString("logos--adobe-animate.svg"),
    'paintnet' : iconString("paintnet.png"),
    'krita' : iconString("krita.png"),
    'dutch' : iconString("dutch.svg"),
    'en' : iconString("en.svg"),
    'spain' : iconString("spain.svg"),
    'python' : iconString("python.svg")
};
>>>>>>> 153f43b78b7aca3076e6030c4207078f342d0a8b
