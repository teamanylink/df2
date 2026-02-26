export enum Screen {
  ONBOARDING = 'ONBOARDING',
  DASHBOARD = 'DASHBOARD',
  LIBRARY = 'LIBRARY',
  SESSION = 'SESSION'
}

export interface NavItem {
  icon: string;
  label: string;
  id: string;
  isActive?: boolean;
}