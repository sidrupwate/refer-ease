import JobCard from "../components/JobCard";
import { jobs } from "../data/jobsData";

export default function Jobs() {
  return (
    <div className="p-6 grid gap-4 sm:grid-cols-2">
      {jobs.map((job) => (
        <JobCard key={job.id} {...job} />
      ))}
    </div>
  );
}
