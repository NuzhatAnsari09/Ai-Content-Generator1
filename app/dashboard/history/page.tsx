// 'use client'

import { Templates } from "@/app/(data)/Templates";
import { db } from '@/utils/db';
import { aiOutput } from '@/utils/schema';
import { desc, eq } from 'drizzle-orm';
import React from "react";
import { TEMPLATES } from '../_components/TemplatelistSection';
import { currentUser } from "@clerk/nextjs/server";
import InteractiveImage from "../_components/InteractiveImage";
import CopyButton from "../_components/CopyButton";

export interface HISTORY {
    id: string | Number;
    formData: string;
    aiResponse: string;
    templateSlug: string;
    createdBy: string;
    createdAt: Date | null; // Ensure this is correctly defined in the database
}

async function HistoryPage() {
    try {
        const user = await currentUser();
        console.log("Current user:", user?.firstName, user?.lastName);

        const fullName = `${user?.firstName} ${user?.lastName}`;
        console.log("Searching for user:", fullName);

        const HistoryList: HISTORY[] = await db.select()
            .from(aiOutput)
            .where(eq(aiOutput.createdBy, fullName))
            .orderBy(desc(aiOutput.id));

        console.log("Found records:", HistoryList.length);
        console.log("History List:", HistoryList); // Log to inspect data structure

        const GetTemplateName = (slug: string) => {
            const template: TEMPLATES | any = Templates?.find((item) => item.slug === slug);
            return template;
        }

        if (HistoryList.length === 0) {
            return (
                <div className="m-5 p-5 border rounded-lg bg-white">
                    <h2 className="font-bold text-3xl">History</h2>
                    <p className="text-gray-500">No history found. Start generating content to see it here.</p>
                </div>
            );
        }

        return (
            <div className="m-5 p-5 border rounded-lg bg-white">
                <h2 className="font-bold text-3xl">History</h2>
                <p className="text-gray-500">Search Your Previously generated Content</p>
                <div className="grid grid-cols-7 font-bold bg-secondary mt-5 p-3">
                    <h2 className="col-span-2">TEMPLATE</h2>
                    <h2 className="col-span-2">AI Response</h2>
                    <h2>DATE</h2>
                    <h2>WORDS</h2>
                    <h2>COPY</h2>
                </div>

                {HistoryList.map((item: HISTORY) => (
                    <div key={item.id} className="grid grid-cols-7 my-5 py-3 px-3 hover:bg-gray-50">
                        <h2 className="col-span-2 flex gap-2 items-center">
                            <InteractiveImage
                                src={GetTemplateName(item.templateSlug)?.icon}
                                width={25}
                                height={25}
                                alt="Template Icon"
                            />
                            {GetTemplateName(item.templateSlug)?.name}
                        </h2>
                        <h2 className="col-span-2 line-clamp-3">
                            {item.aiResponse}
                        </h2>
                        <h2>{item.createdAt ? new Date(item.createdAt).toLocaleDateString() : 'N/A'}</h2>
                        <h2>{item.aiResponse.split(/\s+/).length}</h2>
                        <h2>
                            <CopyButton textToCopy={item.aiResponse} />
                        </h2>
                    </div>
                ))}
            </div>
        );
    } catch (error) {
        console.error("Error in HistoryPage:", error);
        return (
            <div className="m-5 p-5 border rounded-lg bg-white">
                <h2 className="font-bold text-3xl">Error</h2>
                <p className="text-red-500">Failed to load history. Please try again later.</p>
                <pre className="mt-4 p-4 bg-gray-100 rounded overflow-auto">
                    {error instanceof Error ? error.stack : 'Unknown error'}
                </pre>
            </div>
        );
    }
}


export default HistoryPage;
