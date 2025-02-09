export type Resume = {
  id: string;
  full_name: string;
  description: string;
  education: Education[];
  experience: Experience[];
  skills: string[];
  contact: string[];
  languages: string[];
  image_url: string;
  created_at: string;
  updated_at: string;
};

type Education = {
  degree: string;
  school: string;
  end_date: string;
  start_date: string;
};

type Experience = {
  company: string;
  position: string;
  description: string;
  end_date: string;
  start_date: string;
};

export type Review = {
  id: number;
  name: string;
  review: string;
  stars: number;
};
