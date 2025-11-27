"use client";

import {
  ArrowRight,
  Cloud,
  Zap,
  CloudLightning,
  Database,
  Server,
  Code,
  Cpu,
  HardDrive,
  Network,
} from "lucide-react";

interface HomePageProps {
  assignments: any[];
  onSelectAssignment: (id: string) => void;
}

export default function HomePage({
  assignments,
  onSelectAssignment,
}: HomePageProps) {
  const categoryCount = new Set(assignments.map((a) => a.category)).size;

  const FloatingIcon = ({
    icon: Icon,
    className,
  }: {
    icon: any;
    className: string;
  }) => (
    <div className={className}>
      <Icon className="w-16 h-16 text-primary/30" />
    </div>
  );

  return (
    <div className="w-full bg-pattern relative">
      <div className="absolute top-20 -right-20 w-40 h-40 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-secondary/5 blur-3xl" />
      <div className="absolute top-1/2 left-1/3 w-32 h-32 rounded-full bg-accent/5 blur-3xl" />

      <FloatingIcon
        icon={Cloud}
        className="absolute top-10 left-10 opacity-40 animate-bounce"
      />
      <FloatingIcon
        icon={Database}
        className="absolute top-32 right-20 opacity-30 animate-bounce"
      />
      <FloatingIcon
        icon={Server}
        className="absolute bottom-40 left-20 opacity-35 animate-bounce"
      />
      <FloatingIcon
        icon={Zap}
        className="absolute top-1/3 right-1/4 opacity-25 animate-bounce"
      />
      <FloatingIcon
        icon={Code}
        className="absolute bottom-20 right-10 opacity-30 animate-bounce"
      />
      <FloatingIcon
        icon={Cpu}
        className="absolute top-1/4 left-1/4 opacity-35 animate-bounce"
      />
      <FloatingIcon
        icon={Network}
        className="absolute bottom-1/3 right-1/3 opacity-30 animate-bounce"
      />
      <FloatingIcon
        icon={HardDrive}
        className="absolute top-2/3 right-5 opacity-25 animate-bounce"
      />
      <FloatingIcon
        icon={CloudLightning}
        className="absolute top-1/2 left-5 opacity-35 animate-bounce"
      />
      {/* End of floating icons */}

      <div className="max-w-5xl mx-auto px-4 md:px-6 py-8 md:py-12 relative z-10">
        {/* Hero Section */}
        <div className="mb-12 md:mb-16 text-center">
          <div className="space-y-4 mb-8 md:mb-12">
            <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
              Cloud Computing
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
                Assignments & Documentation
              </span>
            </h1>

            <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive knowledge hub for all of my cloud computing
              coursework, documentation, and resources throughout the semester.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 md:mb-16">
            <div className="p-4 md:p-6 rounded-lg bg-card border border-border flex-1 sm:flex-none">
              <p className="text-2xl md:text-3xl font-bold text-primary">
                {assignments.length}
              </p>
              <p className="text-xs md:text-sm text-muted-foreground">
                Assignment
              </p>
            </div>
            <div className="p-4 md:p-6 rounded-lg bg-card border border-border flex-1 sm:flex-none">
              <p className="text-2xl md:text-3xl font-bold text-secondary">
                {categoryCount}
              </p>
              <p className="text-xs md:text-sm text-muted-foreground">
                Categories
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl p-8 md:p-12 bg-primary/5 border-2 border-primary/20 dark:bg-secondary/10 dark:border-secondary/40">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Your Assignments
            </h2>
            <p className="text-sm md:text-base text-muted-foreground">
              Browse and explore your coursework
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {assignments.map((assignment) => (
              <div
                key={assignment.id}
                onClick={() => onSelectAssignment(assignment.id)}
                className="group p-4 md:p-6 rounded-lg bg-card border border-border hover:border-primary hover:shadow-lg transition-all cursor-pointer text-left"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="space-y-2 flex-1">
                    <span className="inline-block px-2 py-1 rounded text-xs font-medium bg-secondary/20 text-secondary">
                      {assignment.category}
                    </span>
                    <h3 className="text-base md:text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {assignment.title}
                    </h3>
                  </div>
                  <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                </div>

                <p className="text-xs md:text-sm text-muted-foreground mb-4 line-clamp-2">
                  {assignment.description}
                </p>

                <div className="flex items-center gap-2 text-xs md:text-sm text-primary font-medium group-hover:gap-3 transition-all">
                  View Assignment
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
