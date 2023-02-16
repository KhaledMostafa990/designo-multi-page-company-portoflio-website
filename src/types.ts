// Brand core data
export interface MainInfo {
  headline: string;
  description: string;
  ctaText: string;
  orderProject: {
    headline: string;
    description: string;
  };
  values: Value[];
  projects: Projects;
  contact: Contact;
}

// Values data
export interface Value {
  headline: string;
  description: string;
}

// Projects info
export interface Projects {
  headline: string;
  description: string;
  items: Project[];
}

// Project data
export interface Project {
  headline: string;
  description: string[];
  image: string;
}

// Contact interface
export interface Contact {
  headline: string;
  description: string[];
  ourLocation: Location[];
}

// Location data
export interface Location {
  country: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  image: string;
}

// About Us Data
export interface AboutUs {
  headline: string;
  description: string[];
  heroImage: string;
  ourTalent: {
    headline: string;
    description: string[];
    image: string;
  };
  ourDeal: {
    headline: string;
    description: string;
    image: string;
  };
}
