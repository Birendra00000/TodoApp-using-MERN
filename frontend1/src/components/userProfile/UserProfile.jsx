import React from "react";

const UserProfile = () => {
  return (
    <div className="relative top-[-60px] text-white">
      {" "}
      <img
        src="profile.jpg"
        alt=""
        className="h-[110px] w-[110px] rounded-full relative left-[120px]"
      />
      <div className="flex justify-center">
        <p className="mb-0">Bibek Bhusal</p>
      </div>
      <div className="flex justify-center text-sm">
        <p className="mb-0">Username@gmail.com</p>
      </div>
    </div>
  );
};

export default UserProfile;
