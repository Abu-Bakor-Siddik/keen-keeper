import Image from "next/image";
import Link from "next/link";

const FriendCard = ({ friend }) => {
  const {id, picture, name, days_since_contact, tags, status } = friend;

  const handleStatus = () => {
    if(status==='overdue'){
        return <div className="badge badge-error text-white bg-red-500! rounded-full">Overdue</div>
    }
    else if(status==='almost due'){
        return <div className="badge badge-warning text-white bg-amber-300! rounded-full">Almost Due</div>
    }
    else if(status==='on-track'){
        return <div className="badge badge-success text-white bg-green-800! rounded-full">On-Track</div>
    }
}
  
  return (
    <Link href={`../${id}`}>
      <div className="card bg-base-100  shadow-sm mt-2 mx-10 md:mx-0">
        <div className="avatar flex justify-center items-center p-4">
          <div className="ring-offset-base-100  rounded-full ring-0 ring-offset-2">
            <Image
            src={picture}
            alt={name}
            width={80}
            height={80}
            ></Image>
          </div>
        </div>
        <div className="card-body flex justify-center items-center p-4">
          <h2 className="card-title">
            {name}
          </h2>
          <p className="text-[#64748B]">
              {days_since_contact}d ago
          </p>
          <div className="card-actions flex justify-center">
              {
                  tags.map((tag,index) => <div key={index} className="badge badge-soft badge-success text-sm font-bold! text-green-800 rounded-full">{tag.toUpperCase()}</div> )
              }
            
          </div>
          <div className="mt-3">
            {handleStatus()}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FriendCard;
