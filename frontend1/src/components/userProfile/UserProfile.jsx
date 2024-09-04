import React from "react";
import { useAuth } from "../../Context/AuthContext";

const UserProfile = () => {
  const { userData } = useAuth();
  console.log("USERDATA", userData);
  // Ensure userData is available and has userName and email properties
  const firstName = userData?.firstName;
  const lastName = userData?.lastName;
  const userName = userData?.userName;
  const userEmail = userData?.userEmail || "Not provided";
  return (
    <div className="relative top-[-30px] md:top-[-60px] text-white">
      {" "}
      <img
        src="profile.jpg"
        alt=""
        className="h-[50px] w-[50px] md:h-[110px] md:w-[110px] rounded-full relative left-[36%] md:left-[35%]"
      />
      <div className="flex justify-center">
        <p className="mb-0 text-[10px] md:text-[16px] lg:text-[16px]">
          {firstName} {lastName}
          {userName}
        </p>
      </div>
      <div className="flex justify-center text-sm">
        <p className="mb-0 text-[10px] md:text-[16px] lg:text-[16px]">
          {userEmail}
        </p>
      </div>
    </div>
  );
};

export default UserProfile;
