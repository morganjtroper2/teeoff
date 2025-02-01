import React, { useEffect, useState } from "react";

interface GolfCourse {
  id: number;
  name: string;
  image: string;
}

const GolfCoursesPage: React.FC = () => {
  const [golfCourses, setGolfCourses] = useState<GolfCourse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGolfCourses = async () => {
      try {
        const response = await fetch("https://api.pexels.com/v1/search?query=golf", {
          headers: {
            Authorization: "YOUR_PEXELS_API_KEY", // Replace with your API key
          },
        });

        if (!response.ok) throw new Error("Failed to fetch data");

        const data = await response.json();
        const courses = data.photos.slice(0, 6).map((photo: any, index: number) => ({
          id: index + 1,
          name: `Golf Course ${index + 1}`,
          image: photo.src.medium,
        }));

        setGolfCourses(courses);
      } catch (error) {
        setError("Error fetching golf courses. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchGolfCourses();
  }, []);

  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold text-green-800 mb-8">Golf Courses</h1>

      {loading && <p className="text-gray-600">Loading golf courses...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {golfCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
            >
              <img
                src={course.image}
                alt={course.name}
                className="w-full h-48 object-cover"
                onError={(e) => (e.currentTarget.src = "https://via.placeholder.com/400x300?text=Golf+Course")}
              />
              <div className="p-4 text-center">
                <h2 className="text-xl font-semibold text-gray-800">{course.name}</h2>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GolfCoursesPage;
