import QuickCheckIn from "@/components/QuickCheckIn";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FiArchive } from "react-icons/fi";
import { RiDeleteBinLine, RiNotificationSnoozeLine } from "react-icons/ri";

const FriendsDetails = async ({ params }) => {
  const { friendsId } = await params;
  const res = await fetch("http://localhost:3000/friendsData.json", {
    cache: "no-store",
  });
  const friends = await res.json();
  const friend = friends.find((friend) => friend.id === Number(friendsId));
  if (!friend) {
  notFound();
}
  const {id, picture, name, bio, email, tags, status,days_since_contact,goal,next_due_date} = friend;

  const handleStatus = () => {
    if (status === "overdue") {
      return (
        <div className="badge badge-error text-white bg-red-500! rounded-full">
          Overdue
        </div>
      );
    } else if (status === "almost due") {
      return (
        <div className="badge badge-warning text-white bg-amber-300! rounded-full">
          Almost Due
        </div>
      );
    } else if (status === "on-track") {
      return (
        <div className="badge badge-success text-white bg-green-800! rounded-full">
          On-Track
        </div>
      );
    }
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
      <div>
        <div className="card bg-base-100  shadow-sm mt-2 mx-10 md:mx-0">
          <div className="avatar flex justify-center items-center p-2">
            <div className="ring-offset-base-100  rounded-full ring-0 ring-offset-2">
              <Image src={picture} alt={name} width={80} height={80}></Image>
            </div>
          </div>
          <div className="card-body flex justify-center items-center">
            <h2 className="card-title">{name}</h2>
            <div className="mb-1">{handleStatus()}</div>
            <div className="card-actions flex justify-center">
              {tags.map((tag, index) => (
                <div
                  key={index}
                  className="badge badge-soft badge-success text-sm font-bold! text-green-800 rounded-full">
                  {tag.toUpperCase()}
                </div>
              ))}
            </div>
            <i className="text-[#64748B]">&quot;{bio}&quot;</i>
            <p className="text-[#64748B]">Preferred:{email}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:mx-0 mx-10 gap-2 mt-2">
          <button className="btn">
            <RiNotificationSnoozeLine />
            Snooze 2 weeks
          </button>
          <button className="btn">
            <FiArchive />
            Archive
          </button>
          <button className="btn text-red-500">
            <RiDeleteBinLine className="text-red-500!" />
            Delete
          </button>
        </div>
      </div>
        <div className="divider md:hidden"></div>
      <div className="mt-2">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:mx-0 mx-10 ">
                <div className="stats shadow  place-items-center">
                    <div className="stat text-center!">
                        <div className="stat-value text-2xl">{days_since_contact}</div>
                        <div className="stat-desc text-[#64748B] ">Days Since Contact</div>
                    </div>
                </div>
                <div className="stats shadow place-items-center">
                    <div className="stat text-center">
                        <div className="stat-value text-2xl">{goal}</div>
                        <div className="stat-desc text-[#64748B] ">Goal (days)</div>
                    </div>
                </div>
                <div className="stats shadow place-items-center">
                    <div className="stat text-center">
                        <div className="stat-value text-2xl">{next_due_date}</div>
                        <div className="stat-desc text-[#64748B] ">Next Due</div>
                    </div>
                </div>
            </div>
        <div>
            <div className="shadow flex flex-col md:flex-row md:justify-between p-10 mt-6 rounded-2xl md:mx-0 mx-10">
                <div className="text-center md:text-start">
                    <div className="font-medium text-green-900 text-2xl mb-2">Relationship Goal</div>
                    <div className=" text-[#64748B] ">Connected every <span className="font-bold text-black">30 Days</span> </div>
                </div>
                <button className="btn mt-5 md:mt-0">Edit</button>
            </div>
        </div>
        <div className="shadow  p-5 mt-10 md:mx-0 mx-10">
            <h2 className="mb-3">Quick Check-In</h2>
            <QuickCheckIn id={id} name={name}></QuickCheckIn>
        </div>
      </div>

    </div>
  );
};

export default FriendsDetails;
