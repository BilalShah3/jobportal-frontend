import Layout from "../../components/layout/Layout";
import NotFound from "../../components/layout/NotFound";
import JobDetails from "../../components/job/JobDetails.js";
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
