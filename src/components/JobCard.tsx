type JobProps = {
    title: string;
    company: string;
    location: string;
    referralAvailable: boolean;
  };
  
  export default function JobCard({ title, company, location, referralAvailable }: JobProps) {
    return (
      <div className="border rounded-xl p-4 shadow-md">
        <h3 className="font-bold text-xl">{title}</h3>
        <p className="text-gray-600">{company} – {location}</p>
        {referralAvailable ? (
          <span className="text-green-600 font-semibold">Referral Available</span>
        ) : (
          <span className="text-red-400">Referral Not Available</span>
        )}
      </div>
    );
  }
  