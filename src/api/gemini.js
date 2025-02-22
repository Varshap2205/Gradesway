export const fetchLessonPlan = async (topic, grade) => {
    const response = await fetch("http://localhost:5000/api/lesson", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents: [{ parts: [{ text: `Create a detailed lesson plan on ${topic} for ${grade} level.` }] }] }),
    });
  
    const data = await response.json();
    return data?.candidates?.[0]?.content?.parts?.[0]?.text || "No lesson plan generated.";
  };
  