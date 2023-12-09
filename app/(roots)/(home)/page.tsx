import React from 'react';
import { UserButton } from "@clerk/nextjs";

const page = () => {
    return (
        <div>
            <h1 className="h1-bold">This is Home</h1>
            <UserButton></UserButton>        
        </div>
    );
};

export default page;