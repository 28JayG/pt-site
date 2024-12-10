export interface AppRoute {
  route: string;
  label: string;
}

export interface CompanyHighlight {
  id: number;
  color?: string;
  highlight: string;
  title: string;
}

export interface Pagination {
  page: number;
  size: number;
}
