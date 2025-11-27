"use client"

import { X } from "lucide-react"

interface PDFViewerProps {
  pdfUrl: string
  title: string
  onClose: () => void
}

export default function PDFViewer({ pdfUrl, title, onClose }: PDFViewerProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-card rounded-lg max-w-4xl w-full max-h-[90vh] flex flex-col border border-border">
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h2 className="font-semibold text-foreground">{title}</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-secondary rounded-lg transition-colors"
            aria-label="Close PDF viewer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-auto">
          <iframe src={`${pdfUrl}#toolbar=0`} className="w-full h-full border-none" title={title} />
        </div>
      </div>
    </div>
  )
}
