import React, { useState, useEffect } from "react";

interface GolfCourse {
  id: number;
  name: string;
  image: string;
}

const ProfilePage: React.FC = () => {
  const [favorites, setFavorites] = useState<GolfCourse[]>([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorites(storedFavorites);
  }, []);

  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold text-green-800 mb-8">My Favorite Golf Courses</h1>

      {favorites.length === 0 ? (
        <p className="text-gray-600">You have no favorite golf courses yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
            >
              <img
                src={course.image}
                alt={course.name}
                className="w-full h-48 object-cover"
                onError={(e) => (e.currentTarget.src = "https://res.cloudinary.com/braid/image/upload/y_109,w_1440,h_701,c_crop,f_auto/w_1400,c_scale/v1617330376/braidcms/d94c970eed07322b4603725a251d5970.jpg")}
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

export default ProfilePage;
