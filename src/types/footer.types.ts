export interface FooterLinkGroup {
  title: string;
  links: FooterLink[];
}

export interface FooterLink {
  id: number;
  title: string;
  href: string;
  icon?: string;
}
