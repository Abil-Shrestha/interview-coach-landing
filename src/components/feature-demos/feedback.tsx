import {
  CheckCircle,
  ArrowRight,
  Lightbulb,
  TrendingUp,
  Star,
} from "lucide-react";

export default function FeedbackDemo() {
  return (
    <div className="bg-background border-2 border-border rounded-xl p-6 lg:p-8 space-y-6 w-full max-w-2xl mx-auto shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <CheckCircle className="w-6 h-6 text-green-500" />
          <span className="text-lg font-semibold text-foreground">
            AI Feedback
          </span>
        </div>
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`w-4 h-4 ${
                star <= 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg border-l-4 border-foreground/20">
          <CheckCircle className="w-5 h-5 text-foreground/70 mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-medium text-foreground">
              Excellent STAR structure!
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              You clearly outlined the Situation, Task, Action, and Result. This
              makes your answer easy to follow.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg border-l-4 border-foreground/20">
          <ArrowRight className="w-5 h-5 text-foreground/70 mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-medium text-foreground">Add specific metrics</p>
            <p className="text-sm text-muted-foreground mt-1">
              Quantify your impact with numbers. Instead of &quot;improved
              efficiency,&quot; try &quot;reduced processing time by 40%.&quot;
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg border-l-4 border-foreground/20">
          <Lightbulb className="w-5 h-5 text-foreground/70 mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-medium text-foreground">Mention collaboration</p>
            <p className="text-sm text-muted-foreground mt-1">
              Highlight how you worked with your team. Leadership isn&apos;t just
              individual achievement.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-muted/50 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="font-medium text-foreground">Overall Score</span>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-foreground/70" />
            <span className="text-sm text-muted-foreground">
              +0.8 improvement
            </span>
          </div>
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Confidence</span>
            <span className="text-lg font-bold text-foreground">8.2/10</span>
          </div>
          <div className="w-full bg-muted rounded-full h-3">
            <div className="bg-gradient-to-r from-foreground/60 to-foreground/80 h-3 rounded-full w-4/5 relative">
              <div className="absolute right-0 top-0 w-2 h-3 bg-background rounded-full border-2 border-foreground/80"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
