

export interface ProofLink {
  label: string;
  url: string;
}

export interface ProfileData {
  name: string;
  title: string;
  phone: string;
  email: string;
  linkedin: string; // Assuming 'riodinoraihan' is a LinkedIn profile ID or similar
  personalStatement: string;
  profileImageUrl?: string;
  cvUrl?: string; // Added for CV link
}

export interface EducationItem {
  institution: string;
  location: string;
  degree: string;
  duration: string;
  gpa?: string;
  notes?: string[];
  imageUrl?: string;
  proofs?: ProofLink[]; // Added for supporting documents like KHS
}

export interface WorkExperienceItem {
  id: string; // Added for routing
  company: string;
  location: string;
  role: string;
  duration: string;
  responsibilities: string[];
  imageUrl: string;
  proofs?: ProofLink[]; // Replaced proofUrl with an array of labeled links
  detailedInfo?: { // Added for more detailed experience information
    description: string;
    keyAchievements?: string[];
    skillsDeveloped?: string[];
    galleryImages?: string[]; // Added for gallery
  };
}

export interface OrganizationItem {
  id: string;
  name: string;
  location: string;
  role: string;
  duration: string;
  summaryPoints: string[];
  imageUrl: string;
  proofs?: ProofLink[]; // Replaced proofUrl with an array of labeled links
  detailedInfo?: {
    description: string;
    mission?: string;
    vision?: string;
    keyPrograms?: string[];
    achievements?: string[];
    galleryImages?: string[];
  };
}

export interface AchievementItem {
  id: string; // Added for routing
  title: string;
  location: string;
  description: string; // This will serve as a short summary
  date: string;
  imageUrl: string;
  proofs?: ProofLink[]; // Replaced proofUrl with an array of labeled links
  detailedInfo?: { // Added for more detailed achievement information
    fullDescription: string;
    context?: string;
    learnings?: string[];
    galleryImages?: string[];
  };
}

export interface ProjectItem {
  id: string; // Added for routing
  title: string;
  description: string; // This will serve as a short summary
  duration: string;
  responsibilities: string[];
  technologies?: string[];
  category?: string; // Added for filtering
  imageUrl: string;
  proofs?: ProofLink[]; // Replaced proofUrl with an array of labeled links
  detailedInfo?: { // Added for more detailed project information
    problemStatement: string;
    solutionOverview: string;
    technicalChallenges?: string[];
    learnings?: string[];
    projectUrl?: string; // Link to live project or repository
    galleryImages?: string[];
  };
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  imageUrl: string;
  category?: string; // Added for filtering
}

export interface SkillCategory {
  categoryName: string;
  skills: string[];
  proofs?: ProofLink[]; // Added for supporting documents like language certificates
}