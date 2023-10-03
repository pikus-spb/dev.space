interface Link {
  server: string;
  link: string;
  title: string;
  description: string;
}

interface LinkSection {
  sectionName: string;
  children: Link[];
}

export type Links = LinkSection[];
