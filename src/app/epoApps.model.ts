export enum AppCategory {
  communications = 'Comunication drafting',
  search = 'Search'
}
export class EpoApps {
  id: string;
  name: string;
  category: AppCategory;
  desc?: string;
  image?: string;
}

export const eppoApps = [
  {
    id: 'a1',
    name: 'Elys',
    desc: '123 (2) made easy',
    category: AppCategory.communications,
  },
  {
    id: 'a2',
    name: 'Summons',
    desc: 'For oppo amd examination',
    category: AppCategory.communications,
  },
  {
    id: 'a3',
    name: 'D07',
    desc: 'For oppo amd examination',
    category: AppCategory.search,
  },
  {
    id: 'a4',
    name: 'Seaster 2',
    desc: 'SDO searching',
    category: AppCategory.search,
  },

]
