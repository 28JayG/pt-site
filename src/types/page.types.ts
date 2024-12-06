import { FooterLink, FooterLinkGroup } from "./footer.types";

export interface PageProps {
  footer: {
    sections: FooterLinkGroup[];
    enquiries: FooterLinkGroup[];
  };
}
