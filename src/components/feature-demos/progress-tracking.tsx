import { TrendingUp, Calendar, Target, Award } from "lucide-react";

export default function ProgressTrackingDemo() {
  return (
    <div className="bg-background border-2 border-border rounded-xl p-6 lg:p-8 space-y-6 w-full max-w-2xl mx-auto shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <TrendingUp className="w-6 h-6 text-foreground/70" />
          <span className="text-lg font-semibold text-foreground">
            Progress Tracking
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/30 px-3 py-1 rounded-full">
          <Award className="w-4 h-4" />
          On track
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="font-medium text-foreground">Skill Progress</h3>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-muted-foreground">
                  Behavioral Questions
                </span>
                <span className="text-sm font-medium text-foreground">85%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-3">
                <div className="bg-gradient-to-r from-foreground/60 to-foreground/80 h-3 rounded-full w-[85%] relative">
                  <div className="absolute right-0 top-0 w-2 h-3 bg-background rounded-full border-2 border-foreground/80"></div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-muted-foreground">
                  Technical Skills
                </span>
                <span className="text-sm font-medium text-foreground">72%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-3">
                <div className="bg-gradient-to-r from-foreground/60 to-foreground/80 h-3 rounded-full w-[72%] relative">
                  <div className="absolute right-0 top-0 w-2 h-3 bg-background rounded-full border-2 border-foreground/80"></div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-muted-foreground">
                  Communication
                </span>
                <span className="text-sm font-medium text-foreground">90%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-3">
                <div className="bg-gradient-to-r from-foreground/60 to-foreground/80 h-3 rounded-full w-[90%] relative">
                  <div className="absolute right-0 top-0 w-2 h-3 bg-background rounded-full border-2 border-foreground/80"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-medium text-foreground">Recent Activity</h3>

          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
              <div className="w-8 h-8 bg-foreground/20 rounded-full flex items-center justify-center">
                <Target className="w-4 h-4 text-foreground/70" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">
                  Completed 3 mock interviews
                </p>
                <p className="text-xs text-muted-foreground">Today</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
              <div className="w-8 h-8 bg-foreground/20 rounded-full flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-foreground/70" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">
                  Improved confidence by 12%
                </p>
                <p className="text-xs text-muted-foreground">This week</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
              <div className="w-8 h-8 bg-foreground/20 rounded-full flex items-center justify-center">
                <Award className="w-4 h-4 text-foreground/70" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">
                  Achieved &quot;STAR Master&quot; badge
                </p>
                <p className="text-xs text-muted-foreground">2 days ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-4 border-t border-border gap-4">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Calendar className="w-4 h-4" />
          <span className="text-sm">15 sessions this week</span>
        </div>
        <button className="w-full sm:w-auto px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
          View Detailed Report
        </button>
      </div>
    </div>
  );
}
