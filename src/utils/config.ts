import siteConfig from '@/data/siteConfig.json';

export type SiteConfig = typeof siteConfig;

export const getSiteConfig = (): SiteConfig => {
  return siteConfig;
};

export const getPersonalInfo = () => {
  return siteConfig.personalInfo;
};

export const getProjects = () => {
  return siteConfig.projects;
};

export const getAwards = () => {
  return siteConfig.awards;
};

export const getJourney = () => {
  return siteConfig.journey;
};

export const getTechStack = () => {
  return siteConfig.techStack;
};

export const getAboutPage = () => {
  return siteConfig.aboutPage;
};

export const getSocialLinks = () => {
  return siteConfig.socialLinks;
};

export const getNavigation = () => {
  return siteConfig.navigation;
};

export const getHomePage = () => {
  return siteConfig.homePage;
};

export const getContact = () => {
  return siteConfig.contact;
};

export const getMeta = () => {
  return siteConfig.meta;
}; 