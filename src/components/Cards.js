import React, { useState } from 'react';
import Card from './Card';

const Cards = (props) => {
  let courses = props.courses;
  let category=props.category;
  const [LikedCourses, SetLikesCourse] = useState([]);

  const getCourses = () => {
    if (category==="All")
    {
    let allCourses = [];

    Object.values(courses).forEach((array) => {
      array.forEach((courseData) => {
        allCourses.push(courseData);
      });
    });

    return allCourses;
  }
  else
   {
     return courses[category] 
   }
  };

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {getCourses().map((course) => (
        <Card
          key={course.id}
          course={course}
          LikedCourses={LikedCourses}
          SetLikes={SetLikesCourse}
        />
      ))}
    </div>
  );
};

export default Cards;