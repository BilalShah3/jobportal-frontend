import Layout from "../../components/layout/Layout";
import NotFound from "../../components/layout/NotFound";
<<<<<<< HEAD
import JobDetails from "../../components/job/JobDetails.js";
=======
import JobDetails from "../../components/Job/JobDetails.js";
>>>>>>> 70308ec9ea5c13a0b338ecdb482dc21ca658a48d
import { isAuthenticatedUser } from "../../utils/isAuthenticated";

import axios from "axios";

export default function JobDetailsPage({ job, candidates, error, access_token}) {
if (error?.includes("Not found")) return <NotFound />;

  return (
    <Layout title={job.title}>
      <JobDetails job={job} candidates={candidates} access_token={access_token} />
    </Layout>
  );
}

export async function getServerSideProps({ req, params }) {
<<<<<<< HEAD

=======
  
>>>>>>> 70308ec9ea5c13a0b338ecdb482dc21ca658a48d
  const access_token = req.cookies.access;

  const user = await isAuthenticatedUser(access_token);

  if (!user) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

<<<<<<< HEAD

=======
>>>>>>> 70308ec9ea5c13a0b338ecdb482dc21ca658a48d
  try {
    const res = await axios.get(
      `${process.env.API_URL}/api/jobs/${params.id}/`
    );

    const job = res.data.job;
    const candidates = res.data.candidates;

    const access_token = req.cookies.access || "";

    return {
      props: {
        job,
        candidates,
        access_token,
      },
    };
  } catch (error) {
    return {
      props: {
        error: error.response.data.detail,
      },
    };
  }
}
