import { AppRoute } from "types/ui.types";

export const appRoutes: Record<string, AppRoute> = {
  home: { route: "/", label: "Who we are" },
  services: { route: "/services", label: "What we do" },
  projects: { route: "/projects", label: "Work we done" },
  technologies: { route: "/technologies", label: "Technologies" },
  resources: { route: "/resources", label: "Resources" },
};
