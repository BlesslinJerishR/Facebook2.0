import {
  CameraIcon,
  EmojiHappyIcon,
  VideoCameraIcon,
} from "@heroicons/react/solid";
import Image from "next/legacy/image";
import { db } from "../firebase";

function InputBox() {
  // const inputRef = useRef(null);
  const sendPost = (e) => {
    e.preventDefault();

    // if (!inputRef.current.value) return;

    // db.collection("posts").add({
    //   message: inputRef.current.value,
    //   // Facebook Session Calls
    //   // name: sessionStorage.user.name,
    //   // email: sessionStorage.user.email,
    //   // image: sessionStorage.user.image,
    //   timestamp: firebase.firestore.FieldValue.serverTimeStamp(),
    // });
    // inputRef.current.value = "";
  };

  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
      <div className="flex space-x-4 p-4 items-center">
        <Image
          className="rounded-full"
          src={"https://links.papareact.com/kxk"}
          width={40}
          height={40}
          layout="fixed"
        />

        <form className="flex flex-1" action="">
          <input
            className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
            type="text"
            name=""
            id=""
            placeholder="What's on you Mind ?"
            // ref={inputRef}
          />
          <button hidden type="submit" onClick={sendPost}>
            Submit
          </button>
        </form>
      </div>
      <div className="flex justify-evenly p-3 border-t">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>
        <div className="inputIcon">
          <CameraIcon className="h-7 text-green-400" />
          <p className="text-xs sm:text-sm xl:text-base">Photos/Video</p>
        </div>
        <div className="inputIcon">
          <EmojiHappyIcon className="h-7 text-yellow-300" />
          <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
