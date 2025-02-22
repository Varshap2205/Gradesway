import { useState } from "react";
import { fetchLessonPlan } from "../api/gemini";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import jsPDF from "jspdf";

const LessonForm = () => {
  const [topic, setTopic] = useState("");
  const [grade, setGrade] = useState("");
  const [lesson, setLesson] = useState([]);
  const [loading, setLoading] = useState(false);

  const generatePlan = async () => {
    setLoading(true);
    const result = await fetchLessonPlan(topic, grade);

    // Convert result into an array of points (assuming new lines separate points)
    const formattedLesson = result.split("\n").filter(point => point.trim() !== "");

    setLesson(formattedLesson);
    setLoading(false);
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text("Lesson Plan", 15, 20);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.text(`Topic: ${topic}`, 15, 30);
    doc.text(`Grade: ${grade}`, 15, 40);

    doc.setFontSize(11);
    let y = 50; // Position for content
    lesson.forEach((point, index) => {
      doc.text(`${index + 1}. ${point}`, 15, y);
      y += 10; // Move down for next point
    });

    doc.save(`LessonPlan_${topic}.pdf`);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 p-6">
      <Card className="w-full max-w-lg bg-white shadow-xl rounded-lg p-6">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold text-gray-800">AI-Powered Lesson Planner</CardTitle>
        </CardHeader>
        <CardContent>
          <Input
            placeholder="Enter Lesson Topic"
            className="mb-3 p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition"
            onChange={(e) => setTopic(e.target.value)}
          />
          <Input
            placeholder="Enter Grade Level"
            className="mb-4 p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition"
            onChange={(e) => setGrade(e.target.value)}
          />
          <Button 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition"
            onClick={generatePlan} 
            disabled={loading}
          >
            {loading ? "Generating..." : "Generate Lesson Plan"}
          </Button>

          {lesson.length > 0 && (
            <Card className="mt-6 bg-gray-50 shadow-md rounded-lg p-5">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-700">Generated Lesson Plan</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  {lesson.map((point, index) => (
                    <li key={index} className="leading-relaxed">{point}</li>
                  ))}
                </ul>
                <Button 
                  className="mt-4 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md transition"
                  onClick={downloadPDF}
                >
                  Download PDF
                </Button>
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default LessonForm;
