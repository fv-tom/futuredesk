'use client';

import { Issue } from '@/mock-data/issues';
import { format } from 'date-fns';
import { motion, Reorder } from 'framer-motion';
import { useIssuesStore } from '@/store/issues-store';
import { AssigneeUser } from './assignee-user';
import { LabelBadge } from './label-badge';
import { PrioritySelector } from './priority-selector';
import { ProjectBadge } from './project-badge';
import { StatusSelector } from './status-selector';

export function IssueGrid({ issue }: { issue: Issue }) {
   const { updateIssueStatus } = useIssuesStore();

   return (
      <motion.div
         layoutId={`issue-grid-${issue.identifier}`}
         className="w-full p-3 bg-background rounded-md shadow-xs border border-border/50 cursor-move"
         drag
         dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
         dragElastic={1}
         dragMomentum={false}
         onDragEnd={(event, info) => {
            const dropZone = document.elementFromPoint(info.point.x, info.point.y);
            const statusColumn = dropZone?.closest('[data-status-id]');
            if (statusColumn) {
               const newStatusId = statusColumn.getAttribute('data-status-id');
               const newStatus = status.find(s => s.id === newStatusId);
               if (newStatus && newStatus.id !== issue.status.id) {
                  updateIssueStatus(issue.id, newStatus);
               }
            }
         }}
      >
         <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5">
               <PrioritySelector priority={issue.priority} issueId={issue.id} />
               <span className="text-xs text-muted-foreground font-medium">{issue.identifier}</span>
            </div>
            <StatusSelector status={issue.status} issueId={issue.id} />
         </div>

         <h3 className="text-sm font-semibold mb-3 line-clamp-2">{issue.title}</h3>

         <div className="flex flex-wrap gap-1.5 mb-3 min-h-[1.5rem]">
            <LabelBadge label={issue.labels} />
            {issue.project && <ProjectBadge project={issue.project} />}
         </div>

         <div className="flex items-center justify-between mt-auto pt-2">
            <span className="text-xs text-muted-foreground">
               {format(new Date(issue.createdAt), 'MMM dd')}
            </span>
            <AssigneeUser user={issue.assignees} />
         </div>
      </motion.div>
   );
}
