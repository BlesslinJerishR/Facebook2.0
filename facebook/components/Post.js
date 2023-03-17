import Image from "next/legacy/image";

import { ChatAltIcon, ShareIcon, ThumbUpIcon } from "@heroicons/react/outline";
function Post() {
  return (
    <div className="flex flex-col">
      {/* post 1 */}
      <div className="p-5 bg-white mt-5 rounded-t-2xl shadow-sm">
        <div className="flex items-center space-x-2">
          <Image
            className="rounded-full"
            src={"https://links.papareact.com/zvy"}
            width={40}
            height={40}
            layout="fixed"
            alt="profile"
          />
          <div>
            <p className="font-medium">Bill Gates</p>
            <p className="text-xs text-gray-400">Today </p>
          </div>
        </div>
        <p className="pt-4"> Good morning Friends !</p>
      </div>
      <div className="relative h-56 md:h-96 bg-white">
        <Image
          src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202303/fqgtgo8acaiyret-sixteen_nine.jpg?size=948:533"
          objectFit="cover"
          layout="fill"
        />
      </div>
      {/* footer */}
      <div className="flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t">
        <div className="inputIcon rounded-none rounded-bl-2xl">
          <ThumbUpIcon className="h-4" />
          <p className="text-xs sm:text-base">Like</p>
        </div>
        <div className="inputIcon rounded-none rounded-bl-2xl">
          <ThumbUpIcon className="h-4" />
          <p className="text-xs sm:text-base">Comment</p>
        </div>
        <div className="inputIcon rounded-none rounded-bl-2xl">
          <ThumbUpIcon className="h-4" />
          <p className="text-xs sm:text-base">Share</p>
        </div>
      </div>
      {/* post 2 */}
      <div className="p-5 bg-white mt-5 rounded-t-2xl shadow-sm">
        <div className="flex items-center space-x-2">
          <Image
            className="rounded-full"
            src={"https://links.papareact.com/kxk"}
            width={40}
            height={40}
            layout="fixed"
            alt="profile"
          />
          <div>
            <p className="font-medium">Elon Musk</p>
            <p className="text-xs text-gray-400">Today </p>
          </div>
        </div>
        <p className="pt-4"> Who uses Twitter ?</p>
      </div>
      <div className="relative h-56 md:h-96 bg-white">
        <Image
          src="https://links.papareact.com/4zn"
          objectFit="cover"
          layout="fill"
        />
      </div>
      {/* footer */}
      <div className="flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t">
        <div className="inputIcon rounded-none rounded-bl-2xl">
          <ThumbUpIcon className="h-4" />
          <p className="text-xs sm:text-base">Like</p>
        </div>
        <div className="inputIcon rounded-none rounded-bl-2xl">
          <ThumbUpIcon className="h-4" />
          <p className="text-xs sm:text-base">Comment</p>
        </div>
        <div className="inputIcon rounded-none rounded-bl-2xl">
          <ThumbUpIcon className="h-4" />
          <p className="text-xs sm:text-base">Share</p>
        </div>
      </div>
      {/* post 3 */}

      <div className="p-5 bg-white mt-5 rounded-t-2xl shadow-sm">
        <div className="flex items-center space-x-2">
          <Image
            className="rounded-full"
            src={
              "https://m.media-amazon.com/images/M/MV5BYTNlOGZhYzgtMmE3OC00Y2NiLWFhNWQtNzg5MjRhNTJhZGVmXkEyXkFqcGdeQXVyNzg5MzIyOA@@._V1_.jpg"
            }
            width={40}
            height={40}
            layout="fixed"
            alt="profile"
          />
          <div>
            <p className="font-medium">Jeff Bezos</p>
            <p className="text-xs text-gray-400">Today </p>
          </div>
        </div>
        <p className="pt-4"> Morning Walk is peaceful !</p>
      </div>
      <div className="relative h-56 md:h-96 bg-white">
        <Image
          src="https://links.papareact.com/k2j"
          objectFit="cover"
          layout="fill"
        />
      </div>
      {/* footer */}
      <div className="flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t">
        <div className="inputIcon rounded-none rounded-bl-2xl">
          <ThumbUpIcon className="h-4" />
          <p className="text-xs sm:text-base">Like</p>
        </div>
        <div className="inputIcon rounded-none rounded-bl-2xl">
          <ThumbUpIcon className="h-4" />
          <p className="text-xs sm:text-base">Comment</p>
        </div>
        <div className="inputIcon rounded-none rounded-bl-2xl">
          <ThumbUpIcon className="h-4" />
          <p className="text-xs sm:text-base">Share</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
