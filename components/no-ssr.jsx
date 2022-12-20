import dynamic from 'next/dynamic';
import React from 'react';

// this is a workaround for Next.js to not render this component on the server
const NoSsr = (props) => <>{props.children}</>;

export default dynamic(() => Promise.resolve(NoSsr), {
    ssr: false,
});
