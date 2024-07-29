import React from "react";
import { useAuth } from "../../Context/AuthContext";

const UserProfile = () => {
  const { userData } = useAuth();
  console.log("USERDATA", userData);
  // Ensure userData is available and has userName and email properties
  const userName = userData?.userName || "Guest";
  const userEmail = userData?.userEmail || "Not provided";
  return (
    <div className="relative top-[-60px] text-white">
      {" "}
      <img
        src="profile.jpg"
        alt=""
        className="h-[110px] w-[110px] rounded-full relative left-[120px]"
      />
      <div className="flex justify-center">
        <p className="mb-0">{userName}</p>
      </div>
      <div className="flex justify-center text-sm">
        <p className="mb-0">{userEmail}</p>
      </div>
    </div>
  );
};

export default UserProfile;
