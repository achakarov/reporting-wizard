export interface Report {
  id: number;
  name?: string;
  description?: string;
  href?: string | null;
  thumbnail: string | null;
}

export interface ReportFormat {
  name: string;
  localizedName: string;
}
