"use client";
import { UserArticlesType } from "@/types/article";
import React, { useCallback, useEffect } from "react";
import { trpc } from "@/server/client";
import { Skeleton } from "../../ui/skeleton";
import { useSearchParams } from "next/navigation";
import ProjectCard from "./ProjectCard";

type Props = {
  articles?: UserArticlesType;
};

const ProjectsTable = ({}: Props) => {
  const { data: projects, isLoading } = trpc.project.getProjects.useQuery();

  if (isLoading) {
    return (
      <ul className="table w-full p-2 space-y-1 border-[1.35px] border-dashed rounded-lg border-muted-foreground/20">
        {[0, 1, 2, 4, 5, 6].map((_, idx) => (
          <Skeleton key={idx} className="w-full h-16" />
        ))}
      </ul>
    );
  }

  if (!projects || projects.length === 0) {
    return (
      <div className="flex items-center justify-center w-full p-4 border-[1.35px] border-dashed rounded-lg h-52">
        <div className="text-lg text-muted-foreground">
          You have not created any projects yet.
        </div>
      </div>
    );
  }
  return (
    <ul className="table w-full overflow-hidden border-[1.35px] border-dashed divide-y rounded-lg divide-dashed">
      {projects?.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </ul>
  );
};

export default ProjectsTable;
