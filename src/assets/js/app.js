// iconMap.js
export function iconString(icon, color = '', width = '24px', height = '24px') {
    const style = color ? ` style="color: ${color}"` : '';
    return `<img src="/assets/img/icons/${icon}" width="${width}" height="${height}" class="imgIcons"${style}>`;
}

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
    'glm': iconString('glm-logo.svg', '', '24px', '12px'),
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
    'yaml': iconString("devicon--yaml.svg")
};