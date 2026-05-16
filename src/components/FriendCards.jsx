import FriendCard from "./FriendCard";

const FriendCards = async() => {
    const res = await fetch('https://keen-keeper-one-tan.vercel.app/friendsData.json',{cache: "no-store"});
    const friends = await res.json();
    return (
        <div className='mt-5'>
            <h2 className='text-2xl font-bold md:text-start text-center'>Your Friends</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 container mx-auto mt-5">
                {
                    friends.map((friend) => <FriendCard key={friend.id} friend={friend}></FriendCard> )
                }
            </div>
        </div>
    );
};

export default FriendCards;