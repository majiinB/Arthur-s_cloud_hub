import { Cloud, CloudLightning, Code, Coffee, Zap } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-full px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-foreground mb-4">
              Arthur's Cloud Hub
            </h3>
            <p className="text-sm text-muted-foreground">
              A comprehensive knowledge hub for cloud computing assignments and
              documentation.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Features</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Assignment Goal, Overview and Summary</li>
              <li>PDF Support with Viewer</li>
              <li>Dark & Light Mode Themes</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">
              Cloud Platforms
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>AWS - Amazon Web Services</li>
              <li>GCP - Google Cloud Platform</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Arthur's Cloud Computing Hub. All rights reserved.
          </p>
          <div className="flex items-center gap-1">
            <span className="text-xs text-muted-foreground">Built with</span>
            <span className="text-primary flex items-center gap-1 text-xs">
              <Code className="w-3 h-3" /> and <Zap className="w-3 h-3" /> +{" "}
              <Coffee className="w-3 h-3" />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
