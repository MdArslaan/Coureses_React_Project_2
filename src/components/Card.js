import React, { useState } from 'react';
import { FcLike, FcLikePlaceholder  } from "react-icons/fc"
import { toast } from 'react-toastify';

const Card = (props) => {
  let course = props.course;
  let LikedCourses = props.LikedCourses;
  let SetLikesCourse = props.SetLikes;

  const ClickHandler = () => {
    if (LikedCourses.includes(course.id)) {
      SetLikesCourse((prev) => prev.filter((cid) => (cid !== course.id)));
      toast.warning("Liked Removed");
    } else {
      if (LikedCourses.length === 0) {
        SetLikesCourse([course.id]);
      } else {
        SetLikesCourse((prev) => [...prev, course.id]);
      }
      toast.success("Liked SuccesFully");
    }
  };

  return (
    <div className="bg-gray-600 w-[300px]  rounded-2xl  overflow-hidden h-auto ">
      <div className="relative">
        <img className=" " src={course.image.url} />

        <div>
          <button onClick={ClickHandler} className=" w-[40px] h-[40px] right-2 bottom-1 top-36 bg-white absolute grid rounded-full place-items-center">
            
            {
              LikedCourses.includes(course.id) ? (<FcLike fontSize="1.25rem" />) : <FcLikePlaceholder />
            }
          </button>
        </div>
      </div>
      <div className="">
        <p className="text-white font-bold m-3">{course.title}</p>
        <p className="text-white px-3">
         {
           course.description.length > 100 ? (course.description.substr(0,100)) + "..." : (course.description)
         }</p>
      </div>
    </div>
  );
};

export default Card;