import HubspotForm from "react-hubspot-form";
import React from "react";

const WaitListForm = () => {
  return (
    <div className="w-full pt-6 pb-5 pl-5 pr-5 mt-16 mb-12 border-8 border-black border-solid md:pb-7 dark:bg-white">
      <h2 className="dark:text-black">
        Join Gnosis, TEC, Commons Stack, General Magic and others ...
      </h2>

      <HubspotForm
        portalId="26169779"
        formId="69b2cf62-5a07-4515-9267-3c5e25791dd0"
        onSubmit={() => console.log("Submit!")}
        onReady={(form) => console.log("Form ready!")}
        loading={<div>Loading...</div>}
      />
    </div>
  );
};

export default WaitListForm;
