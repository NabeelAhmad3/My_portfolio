export type Skill =
  | 'html'
  | 'css'
  | 'bootstrap'
  | 'materialui'
  | 'figma'
  | 'javascript'
  | 'typescript'
  | 'angular'
  | 'ionic'
  | 'electron'
  | 'nodejs'
  | 'aspnet'
  | 'mysql'
  | 'postgresql'
  | 'mssql'
  | 'git'
  | 'docker'
  | 'wordpress'
  | 'cpannel';

export const skillsImage = (skill: string): string => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'html':
      return `/assets/svg/skills/${skillID}.svg`;
    case 'css':
      return `/assets/svg/skills/${skillID}.svg`;
    case 'bootstrap':
      return `/assets/svg/skills/${skillID}.svg`;
    case 'materialui':
      return `/assets/svg/skills/${skillID}.svg`;
    case 'figma':
      return `/assets/svg/skills/${skillID}.svg`;
    case 'javascript':
      return `/assets/svg/skills/${skillID}.svg`;
    case 'typescript':
      return `/assets/svg/skills/${skillID}.svg`;
    case 'angular':
      return `/assets/svg/skills/${skillID}.svg`;
    case 'ionic':
      return `/assets/svg/skills/${skillID}.svg`;
    case 'electron':
      return `/assets/svg/skills/${skillID}.svg`;
    case 'nodejs':
      return `/assets/svg/skills/${skillID}.svg`;
    case 'aspnet':
      return `/assets/svg/skills/${skillID}.svg`;
    case 'mysql':
      return `/assets/svg/skills/${skillID}.svg`;
    case 'postgresql':
      return `/assets/svg/skills/${skillID}.svg`;
    case 'mssql':
      return `/assets/svg/skills/${skillID}.svg`;
    case 'git':
      return `/assets/svg/skills/${skillID}.svg`;
    case 'docker':
      return `/assets/svg/skills/${skillID}.svg`;
    case 'wordpress':
      return `/assets/svg/skills/${skillID}.svg`;
    default:
      return '';
  }
};

export default skillsImage;