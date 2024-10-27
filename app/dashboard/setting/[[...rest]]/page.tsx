// app/dashboard/setting/page.tsx or app/dashboard/setting/page.jsx
import { UserProfile } from '@clerk/nextjs';
import React from 'react';

const Setting = () => {
    return (
        <div className='flex items-center justify-center h-full'>
            <UserProfile />
        </div>
    );
};

export default Setting;
