import { Search, Tag, Filter, BookOpen } from "lucide-react";

export default function QuestionBankDemo() {
  return (
    <div className="bg-background border-2 border-border rounded-xl p-6 lg:p-8 space-y-6 w-full max-w-2xl mx-auto shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <BookOpen className="w-6 h-6 text-primary" />
          <span className="text-lg font-semibold text-foreground">
            Question Bank
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Search className="w-5 h-5 text-gray-400" />
          <div className="relative">
            <input
              type="text"
              placeholder="Search questions..."
              className="w-40 lg:w-48 px-3 py-1 text-sm border border-border bg-background text-foreground rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <div className="border border-border rounded-lg p-4 hover:bg-muted/50 cursor-pointer transition-colors group">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                Tell me about yourself and your background
              </h4>
              <p className="text-sm text-muted-foreground mt-1">
                A common opener that sets the tone for the entire interview
              </p>
            </div>
            <div className="text-xs text-muted-foreground/60">2 min</div>
          </div>
          <div className="flex flex-wrap gap-2 mt-3">
            <span className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded-full">
              Behavioral
            </span>
            <span className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded-full">
              Common
            </span>
            <span className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded-full">
              Entry Level
            </span>
          </div>
        </div>

        <div className="border border-border rounded-lg p-4 hover:bg-muted/50 cursor-pointer transition-colors group">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                Explain how you would design a scalable web application
              </h4>
              <p className="text-sm text-muted-foreground mt-1">
                System design question focusing on architecture and scalability
              </p>
            </div>
            <div className="text-xs text-muted-foreground/60">15 min</div>
          </div>
          <div className="flex flex-wrap gap-2 mt-3">
            <span className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded-full">
              Technical
            </span>
            <span className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded-full">
              System Design
            </span>
            <span className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded-full">
              Senior
            </span>
          </div>
        </div>

        <div className="border border-border rounded-lg p-4 hover:bg-muted/50 cursor-pointer transition-colors group">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                Describe a time you had to handle a difficult stakeholder
              </h4>
              <p className="text-sm text-muted-foreground mt-1">
                Tests conflict resolution and communication skills
              </p>
            </div>
            <div className="text-xs text-muted-foreground/60">5 min</div>
          </div>
          <div className="flex flex-wrap gap-2 mt-3">
            <span className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded-full">
              Behavioral
            </span>
            <span className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded-full">
              Leadership
            </span>
            <span className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded-full">
              Mid-Level
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-border">
        <div className="text-sm text-muted-foreground">
          <span className="font-medium text-foreground">847</span> questions
          across all categories
        </div>
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-muted-foreground/60" />
          <button className="text-sm text-primary hover:text-primary/80 font-medium">
            Filter by role
          </button>
        </div>
      </div>
    </div>
  );
}
