import Features from "@/components/features-horizontal";
import Section from "@/components/section";
import { BarChart3, Brain, FileText, LineChart } from "lucide-react";
import MockInterviewDemo from "@/components/feature-demos/mock-interview";
import FeedbackDemo from "@/components/feature-demos/feedback";
import QuestionBankDemo from "@/components/feature-demos/question-bank";
import ProgressTrackingDemo from "@/components/feature-demos/progress-tracking";

const data = [
  {
    id: 1,
    title: "Mock Interviews",
    content:
      "Practice behavioral and technical questions with an AI interviewer.",
    icon: <BarChart3 className="h-6 w-6 text-primary" />,
    component: <MockInterviewDemo />,
  },
  {
    id: 2,
    title: "Real-time Feedback",
    content: "Get structured, actionable suggestions after every answer.",
    icon: <Brain className="h-6 w-6 text-primary" />,
    component: <FeedbackDemo />,
  },
  {
    id: 3,
    title: "Question Bank",
    content: "Curated questions by role and seniority to cover your bases.",
    icon: <LineChart className="h-6 w-6 text-primary" />,
    component: <QuestionBankDemo />,
  },
  {
    id: 4,
    title: "Progress Tracking",
    content: "See strengths, gaps, and trends to improve faster.",
    icon: <FileText className="h-6 w-6 text-primary" />,
    component: <ProgressTrackingDemo />,
  },
];

export default function Component() {
  return (
    <Section title="Features" subtitle="Everything you need to ace interviews">
      <Features collapseDelay={5000} linePosition="bottom" data={data} />
    </Section>
  );
}
