import Link from '@docusaurus/Link';
import React from 'react';

const GetPraiseButton = () => {
  return (
      <div>
        <Link
            className="button button--secondary button--lg"
            to="/waitlist">
            Get Praise!
        </Link>        
      </div>
  );
}

export default GetPraiseButton;
