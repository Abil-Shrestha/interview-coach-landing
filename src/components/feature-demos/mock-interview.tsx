import { MessageCircle, Mic, User, Play } from "lucide-react";

export default function MockInterviewDemo() {
  return (
    <div className="bg-background border-2 border-border rounded-xl p-6 lg:p-8 space-y-6 w-full max-w-2xl mx-auto shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <MessageCircle className="w-6 h-6 text-primary" />
          <span className="text-lg font-semibold text-foreground">
            Mock Interview Session
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          Live
        </div>
      </div>

      <div className="space-y-6">
        {/* AI Message */}
        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-sm">
            <span className="text-sm font-bold text-white">AI</span>
          </div>
          <div className="flex-1">
            <div className="bg-muted/50 rounded-2xl rounded-tl-md p-4 lg:p-5">
              <p className="text-foreground text-base lg:text-lg leading-relaxed">
                &quot;Tell me about a time you had to lead a challenging project.
                Walk me through your approach and the outcome.&quot;
              </p>
            </div>
            <div className="flex gap-2 mt-2 text-xs text-muted-foreground">
              <span className="px-2 py-1 bg-purple-100 text-purple-600 rounded-full">
                Behavioral
              </span>
              <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full">
                Leadership
              </span>
            </div>
          </div>
        </div>

        {/* User Response Area */}
        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-sm">
            <User className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <div className="border-2 border-dashed border-primary/30 bg-primary/5 hover:bg-primary/10 rounded-2xl rounded-tl-md p-4 lg:p-5 flex items-center gap-3 hover:border-primary/50 transition-all duration-200 cursor-pointer group">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Mic className="w-4 h-4 text-primary-foreground" />
                </div>
                <div className="flex space-x-1">
                  <div className="w-1 h-1 bg-primary rounded-full animate-bounce"></div>
                  <div
                    className="w-1 h-1 bg-primary rounded-full animate-bounce"
                    style={{ animationDelay: "0.1s" }}
                  ></div>
                  <div
                    className="w-1 h-1 bg-primary rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                </div>
              </div>
              <span className="text-foreground/80 group-hover:text-foreground text-base lg:text-lg font-medium transition-colors">
                Click to start recording your answer...
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-4 border-t border-border gap-4">
        <div className="flex gap-3 w-full sm:w-auto">
          <button className="flex-1 sm:flex-none px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
            Start Recording
          </button>
          <button className="flex-1 sm:flex-none px-4 py-2 border border-border text-muted-foreground rounded-lg hover:bg-muted/50 transition-colors">
            Skip Question
          </button>
        </div>
        <div className="text-sm text-muted-foreground">Question 1 of 5</div>
      </div>
    </div>
  );
}
