import FriendCards from "@/components/FriendCards";
import { Suspense } from "react";
import { TiPlus } from "react-icons/ti";

export default  function Home() {
  return (
    <div>
      <main>
        <div className="text-center mt-20">
          <h2 className=" text-3xl md:text-5xl font-bold! mb-4">
            Friends to keep close in your life
          </h2>
          <p className="text-[#64748B] ">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the
            <br />
            relationships that matter most.
          </p>
          <button className="btn btn-active text-white bg-green-800 mt-6">
            <TiPlus />
            Add a Friend
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5 text-center mx-10">
            <div className="stats shadow p-5">
              <div className="stat">
                <div className="stat-value">8</div>
                <div className="stat-desc text-[#64748B] ">Total Friends</div>
              </div>
            </div>
            <div className="stats shadow p-5">
              <div className="stat">
                <div className="stat-value">3</div>
                <div className="stat-desc text-[#64748B] ">On Track</div>
              </div>
            </div>
            <div className="stats shadow p-5">
              <div className="stat">
                <div className="stat-value">6</div>
                <div className="stat-desc text-[#64748B] ">Need Attention</div>
              </div>
            </div>
            <div className="stats shadow p-5">
              <div className="stat">
                <div className="stat-value">12</div>
                <div className="stat-desc text-[#64748B] ">Interaction This Month</div>
              </div>
            </div>
        </div>
        <div className="border-t-2 border-gray-100 mt-10">
          <Suspense fallback={<div className="flex justify-center items-center py-10">
                                  <span className="loading loading-bars loading-xl"></span></div>}>
            <FriendCards></FriendCards>
          </Suspense>
        </div>
      </main>
    </div>
  );
}
