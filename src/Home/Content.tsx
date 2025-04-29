import { Camera } from "lucide-react";
import React, { ChangeEvent, useEffect, useState } from "react";
import Tabs from "./Tabs/Tabs";

const Content = () => {
  const [bannerUrl, setBannerUrl] = useState("https://dummyimage.com/1500x400");
  const [profileUrl, setProfileUrl] = useState("https://dummyimage.com/100");

  const handleBannerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      console.log("hello");

      const file = event.target.files[0];
      if (file) {
        const newBanner = URL.createObjectURL(file);
        setBannerUrl(newBanner);
      }
    }
  };
  const handleProfileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      if (file) {
        const newProfileUrl = URL.createObjectURL(file);
        setProfileUrl(newProfileUrl);
      }
    }
  };
  useEffect(() => {
    const profile = profileUrl;
    const banner = bannerUrl;
    return () => {
      if (
        (profile && profile.startsWith("blob")) ||
        (banner && banner.startsWith("blob"))
      ) {
        URL.revokeObjectURL(profile || banner);
      }
    };
  }, [profileUrl, bannerUrl]);

  return (
    <div className=" relative w-[94%] ml-[5rem]">
      <div className="relative">
        <img
          src={bannerUrl}
          alt="banner image"
          className=" w-full h-60 object-cover"
        />

        <label
          htmlFor="banner-upload"
          className=" absolute top-2 right-2 bg-gray-800 text-white p-2 ring ring-white rounded-full hover:bg-gray-600
       cursor-pointer">
          <Camera />
        </label>
        <input
          type="file"
          id="banner-upload"
          accept="image/*"
          className="hidden"
          onChange={(event) => handleBannerChange(event)}
        />
      </div>
      <div className="flex items-center ml-4 mt-[2rem]">
        <img
          src={profileUrl}
          alt="Channel profile picture"
          className="w-40 h-40 object-cover rounded-full ring ring-white relative"
        />

        <label
          htmlFor="profile-upload"
          className="absolute ml-[3.6rem]  mt-[9rem] bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 ">
          <Camera />
        </label>
        <input
          type="file"
          id="profile-upload"
          accept="image/*"
          className="hidden"
          onChange={handleProfileUpload}
        />
        <div className=" ml-[2rem] mr-10">
          <h1 className=" text-xl font-bold text-gray-600">Daniel Freeman</h1>
          <h2 className=" mt-2">1M views</h2>
          <p className=" text-gray-500 text-justify mt-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui ullam
            laboriosam exercitationem, laudantium architecto sed id? Laudantium
            ut quae in.
          </p>
          <button className=" px-6 py-2 bg-red-600 text-white rounded mt-2 hover:bg-red-500 active:bg-red-400">
            Subscribe
          </button>
        </div>
      </div>
      <Tabs />
    </div>
  );
};

export default Content;
