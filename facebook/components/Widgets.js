import { SearchIcon } from "@heroicons/react/outline";
import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid";
import Contact from "./Contact";

const contacts = [
  {
    name: "Elon Musk",
    src: "https://links.papareact.com/4zn",
  },
  {
    name: "Sonny Sangha",
    src: "https://links.papareact.com/zof",
  },
  {
    name: "Jeff Bezos",
    src: "https://links.papareact.com/k2j",
  },
  {
    name: "Mark Zuckerberg",
    src: "https://links.papareact.com/xql",
  },
  {
    name: "Bill gates",
    src: "https://links.papareact.com/4u4",
  },
];

function Widgets() {
  return (
    <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
      <div className="flex justify-between items-center text-gray-599 mb-5">
        <h2 className="text-xl">Contacts</h2>
        <div className="flex space-x-2">
          <VideoCameraIcon className="h-6" />
          <SearchIcon className="h-6" />
          <DotsHorizontalIcon className="h-6" />
        </div>
      </div>
      {contacts.map((contact) => (
        <Contact key={contact.src} src={contact.src} name={contact.name} />
      ))}
    </div>
  );
}

export default Widgets;
