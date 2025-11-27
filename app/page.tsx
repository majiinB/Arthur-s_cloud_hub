"use client";

import { useState } from "react";
import Header from "@/components/header";
import HomePage from "@/components/home-page";
import AssignmentPage from "@/components/assignment-page";
import Footer from "@/components/footer";
import type { Assignment } from "@/data/assignments";
import defaultAssignments from "@/data/assignments";

export default function RootPage() {
  const [currentPage, setCurrentPage] = useState<string>("");
  const [assignments, setAssignments] =
    useState<Assignment[]>(defaultAssignments);

  const isViewingAssignment =
    currentPage !== "" && currentPage !== "assignments";

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />

      <main className="flex-1 overflow-y-auto">
        {currentPage === "" ? (
          <HomePage
            assignments={assignments}
            onSelectAssignment={setCurrentPage}
          />
        ) : isViewingAssignment ? (
          <AssignmentPage
            assignment={assignments.find((a) => a.id === currentPage)}
            onBack={() => setCurrentPage("")}
          />
        ) : currentPage === "assignments" ? (
          <div className="max-w-5xl mx-auto w-full px-4 md:px-6 py-8 md:py-12">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6 md:mb-8">
              All Assignments
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {assignments.map((assignment) => (
                <div
                  key={assignment.id}
                  onClick={() => setCurrentPage(assignment.id)}
                  className="group p-4 md:p-6 rounded-lg bg-card border border-border hover:border-primary hover:shadow-lg transition-all cursor-pointer"
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
                  </div>

                  <p className="text-xs md:text-sm text-muted-foreground mb-4 line-clamp-2">
                    {assignment.description}
                  </p>

                  <div className="flex items-center gap-2 text-xs md:text-sm text-primary font-medium group-hover:gap-3 transition-all">
                    View Assignment →
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </main>

      <Footer />
    </div>
  );
}
