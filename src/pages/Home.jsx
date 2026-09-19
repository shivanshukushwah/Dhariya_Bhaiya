import React from 'react';
import PopupModal from '../components/PopupModal';
import HomeContent from '../components/HomeContent';
import WelcomeSection from '../components/WelcomeSection';
import WinningTrust from '../components/WinningTrust';
import MakeupDescriptions from '../components/MakeupDescriptions';
import MakeupBanner from '../components/MakeupBanner';

import WhatMakesUsDifferent from '../components/WhatMakesUsDifferent';
import MeetFounderSection from '../components/MeetFounderSection';
import EnquiryForm from '../components/EnquiryForm';
import PromoBannerBooking from '../components/PromoBannerBooking';

const Home = () => {
  return (
    <>
      <PopupModal />
      <HomeContent />
      <WelcomeSection />
      <WinningTrust />
      <MakeupDescriptions />

      <WhatMakesUsDifferent />
      <MakeupBanner />
      <MeetFounderSection />
      <EnquiryForm />
    </>
  );
};

export default Home;
