import { CheckCircle, MessageCircle, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

interface HowItWorksVisualProps {
  currentStep: number;
}

export default function HowItWorksVisual({
  currentStep,
}: HowItWorksVisualProps) {
  const steps = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Choose Your Role",
      description: "Select interview type",
      color: "bg-blue-500",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Practice with AI",
      description: "Mock interview session",
      color: "bg-green-500",
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Review Feedback",
      description: "Get actionable insights",
      color: "bg-purple-500",
    },
  ];

  return (
    <div className="bg-background border-2 border-border rounded-xl p-8 space-y-8 w-full max-w-lg mx-auto shadow-sm">
      <div className="text-center">
        <h3 className="text-lg font-semibold text-foreground mb-2">
          Your Interview Journey
        </h3>
        <p className="text-sm text-muted-foreground">
          Step {currentStep + 1} of {steps.length}
        </p>
      </div>

      <div className="space-y-6">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className={`flex items-center gap-4 p-4 rounded-lg transition-all duration-300 ${
              index === currentStep
                ? "bg-primary/10 border-2 border-primary/30"
                : "bg-muted/30 border-2 border-transparent"
            }`}
            initial={{ opacity: 0.5, scale: 0.95 }}
            animate={{
              opacity: index <= currentStep ? 1 : 0.5,
              scale: index === currentStep ? 1 : 0.95,
            }}
            transition={{ duration: 0.3 }}
          >
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center ${
                index <= currentStep
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {index < currentStep ? (
                <CheckCircle className="w-6 h-6" />
              ) : (
                <span className="text-lg font-bold">{index + 1}</span>
              )}
            </div>
            <div className="flex-1">
              <h4
                className={`font-medium ${
                  index <= currentStep
                    ? "text-foreground"
                    : "text-muted-foreground"
                }`}
              >
                {step.title}
              </h4>
              <p
                className={`text-sm ${
                  index <= currentStep
                    ? "text-muted-foreground"
                    : "text-muted-foreground/60"
                }`}
              >
                {step.description}
              </p>
            </div>
            {index === currentStep && (
              <motion.div
                className="w-2 h-2 bg-primary rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            )}
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center">
        <div className="flex space-x-2">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentStep ? "bg-primary" : "bg-muted"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
