import { Status, status } from './status';
import {
   Blocks,
   Bomb,
   BrickWall,
   Cuboid,
   Grid2X2,
   LucideIcon,
   Shapes,
   TrafficCone,
   Vault,
   Wallpaper,
} from 'lucide-react';
import { RemixiconComponentType } from '@remixicon/react';
export interface Project {
   id: string;
   name: string;
   status: Status;
   icon: LucideIcon | RemixiconComponentType;
   percentComplete: number;
   startDate: string;
}

export const projects: Project[] = [
   {
      id: '1',
      name: 'UI - Core Components',
      status: status[0],
      icon: Cuboid,
      percentComplete: 80,
      startDate: '2025-03-08',
   },
   {
      id: '2',
      name: 'UI - Theming',
      status: status[1],
      icon: Blocks,
      percentComplete: 50,
      startDate: '2025-03-14',
   },
   {
      id: '3',
      name: 'UI - Modals',
      status: status[2],
      icon: Vault,
      percentComplete: 0,
      startDate: '2025-03-09',
   },
   {
      id: '4',
      name: 'UI - Navigation',
      status: status[3],
      icon: BrickWall,
      percentComplete: 0,
      startDate: '2025-03-10',
   },
   {
      id: '5',
      name: 'UI - Layout',
      status: status[4],
      icon: Wallpaper,
      percentComplete: 0,
      startDate: '2025-03-11',
   },
   {
      id: '6',
      name: 'UI - Sidebar',
      status: status[5],
      icon: TrafficCone,
      percentComplete: 0,
      startDate: '2025-03-12',
   },
   {
      id: '7',
      name: 'UI - Cards',
      status: status[1],
      icon: Grid2X2,
      percentComplete: 0,
      startDate: '2025-03-13',
   },
   {
      id: '8',
      name: 'UI - Tooltip',
      status: status[2],
      icon: Bomb,
      percentComplete: 0,
      startDate: '2025-03-14',
   },
   {
      id: '9',
      name: 'UI - Dropdown',
      status: status[3],
      icon: Shapes,
      percentComplete: 50,
      startDate: '2025-03-15',
   },
];
