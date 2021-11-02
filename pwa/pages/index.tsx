import React from 'react';
import Layout from 'components/common/layout';
import {useRouter} from "next/router";

const Welcome = () => {
  const router = useRouter();
  return (
    <>
      <Layout title="Welkom">

      </Layout>
    </>
  );
};

export default Welcome;

