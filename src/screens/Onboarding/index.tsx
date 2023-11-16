import React, {useState} from 'react';

// components
import {OnboardingItems} from '../../components/OnboardingItems';

const Onboarding = () => {
  const [state, setState] = useState<number>(0);

  switch (state) {
    case 0:
      return <OnboardingItems state={state} setState={setState} />;
    case 1:
      return <OnboardingItems state={state} setState={setState} />;
    case 2:
      return <OnboardingItems state={state} setState={setState} />;
    case 3:
      return <OnboardingItems state={state} setState={setState} />;
  }
};

export default Onboarding;
