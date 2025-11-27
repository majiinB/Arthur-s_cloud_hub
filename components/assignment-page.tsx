"use client";

import { useState, Fragment } from "react";
import type { Assignment } from "@/data/assignments";
import { ArrowLeft, FileText, Download } from "lucide-react";
import PDFViewer from "./pdf-viewer";

interface AssignmentPageProps {
  assignment?: Assignment | null;
  onBack: () => void;
}

export default function AssignmentPage({
  assignment,
  onBack,
}: AssignmentPageProps) {
  const [showPDFViewer, setShowPDFViewer] = useState(false);

  if (!assignment) return null;

  // Ensure content exists to avoid runtime errors
  const content = assignment.content ?? assignment.overview ?? "";
  const lines = content.split("\n");
  const headings = lines.filter((line: string) => line.startsWith("#"));

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-primary mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Assignments
        </button>

        {/* Title + Description */}
        <div className="mb-6">
          <div className="inline-block px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
            {assignment.category}
          </div>

          <h1 className="text-4xl font-bold text-foreground mb-2">
            {assignment.title}
          </h1>

          <p className="text-lg text-muted-foreground">
            {assignment.description}
          </p>
        </div>

        {/* Overview / Learning Objectives */}
        {assignment.overview && (
          <div className="prose dark:prose-invert max-w-none mb-8 whitespace-pre-wrap">
            {assignment.overview}
          </div>
        )}

        {/* Embedded PDF */}
        {assignment.pdfUrl && (
          <div className="w-full h-[800px] border border-border rounded-lg overflow-hidden">
            <iframe src={assignment.pdfUrl} className="w-full h-full" />
          </div>
        )}
      </div>
    </div>
  );
}
