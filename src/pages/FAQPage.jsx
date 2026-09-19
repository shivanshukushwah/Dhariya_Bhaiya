import React from 'react';
import PageHeader from '../components/PageHeader';
import FAQ from '../components/FAQ';

const FAQPage = () => {
  return (
    <>
      <PageHeader title="Frequently Asked Questions" breadcrumbs={[{ label: 'FAQ' }]} />
      <FAQ />
    </>
  );
};

export default FAQPage;
