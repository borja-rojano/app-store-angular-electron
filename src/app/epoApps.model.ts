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
    path: '/elys',
    desc: '123 (2) made easy',
    category: AppCategory.communications,
  },
  {
    id: 'a2',
    name: 'Summons',
    path: '/summons',
    desc: 'For oppo amd examination',
    category: AppCategory.communications,
  },
  {
    id: 'a3',
    name: 'D07',
    path: '/d07',
    desc: 'For oppo amd examination',
    category: AppCategory.search,
  },
  {
    id: 'a4',
    name: 'Seaster 2',
    path: '/seaster2',
    desc: 'SDO searching',
    category: AppCategory.search,
  },
]
