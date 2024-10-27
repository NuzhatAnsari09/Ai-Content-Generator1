'use client'
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext'
import { UpdateCreditUsageContext } from '@/app/(context)/UpdateCreditUsageContext'
import { UserSubscriptionContext } from '@/app/(context)/UserSubscriptionContext'
import { Button } from '@/components/ui/button'
import { db } from '@/utils/db'
import { aiOutput, UserSubscription } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import { eq, desc } from 'drizzle-orm'
import React, { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'; // Import useRouter
import { HISTORY } from '../history/page'

const UsageTrack = () => {
    const { user } = useUser(); // Use the useUser hook here
    const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);
    const { userSubscription, setUserSubscription } = useContext(UserSubscriptionContext);
    const { updateCreditUsage } = useContext<any>(UpdateCreditUsageContext);
    const [maxWords, setMaxWords] = useState(10000);
    const router = useRouter();

    useEffect(() => {
        if (user) {
            GetData();
            IsUserSubscribed();
        }
    }, [user]);

    useEffect(() => {
        if (user && updateCreditUsage) {
            GetData();
        }
    }, [updateCreditUsage]);

    const GetData = async () => {
        try {
            const fullName = `${user?.firstName} ${user?.lastName}`; // Construct the full name
            console.log("Searching for user:", fullName);

            const result: HISTORY[] = await db.select()
                .from(aiOutput)
                .where(eq(aiOutput.createdBy, fullName)) // Match by full name
                .orderBy(desc(aiOutput.id)); // Optional: sort by ID

            console.log("Fetched AI responses:", result); // Log the results
            GetTotalUsage(result); // Call to calculate total usage
        } catch (error) {
            console.error("Error fetching data:", error); // Log any errors
        }
    }

    const IsUserSubscribed = async () => {
        const result = await db.select().from(UserSubscription)
            .where(eq(UserSubscription.email, user?.primaryEmailAddress?.emailAddress));
        console.log("Subscription check result:", result); // Log the result
        if (result.length > 0) {
            setUserSubscription(true);
            setMaxWords(100000);
        }
    }

    const GetTotalUsage = (result: HISTORY[]) => {
        let total = result.reduce((acc, element) => {
            console.log("Current AI response:", element.aiResponse); // Log each response
            return acc + (element.aiResponse ? element.aiResponse.split(/\s+/).length : 0);
        }, 0);
        console.log("Total words:", total);
        setTotalUsage(total);
    }
    // Handler for Upgrade button
    const handleUpgradeClick = () => {
        router.push('/dashboard/billing'); // Navigate to billing page
    };

    return (
        <div className='m-5'>
            <div className='bg-primary text-white rounded-lg p-3'>
                <h2 className='font-medium'>Credit</h2>
                <div className='h-2 bg-[#9981f9] w-full rounded-full mt-3 '>
                    <div className='h-2 text-white rounded-full'
                        style={{
                            width: `${(totalUsage / maxWords) * 100}%`
                        }}
                    ></div>
                </div>
                <h2 className='text-sm my-2'>{totalUsage}/{maxWords} Credit used</h2>
            </div>
            <Button variant={'secondary'} className='w-full my-3 text-primary'
                onClick={handleUpgradeClick}
            >Upgrade</Button>
        </div>
    )
}

export default UsageTrack;
