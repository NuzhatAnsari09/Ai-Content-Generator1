"use client";
import React, { useContext, useState } from "react";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import { Templates } from "@/app/(data)/Templates";
import { TEMPLATES } from "../../_components/TemplatelistSection";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Rss } from "lucide-react";
import Link from "next/link";
import { chatSession } from "@/utils/AiModal";
import { useUser } from "@clerk/clerk-react"; // Clerk for authentication
import { db } from "@/utils/db"; // Database logic
import { aiOutput } from "@/utils/schema"; // Schema
import { TotalUsageContext } from "@/app/(context)/TotalUsageContext";
import { useRouter } from "next/navigation";
import { UserSubscriptionContext } from "@/app/(context)/UserSubscriptionContext";
import { UpdateCreditUsageContext } from "@/app/(context)/UpdateCreditUsageContext";

interface PROPS {
  params: {
    "template-slug": string;
  };
}

function CreateContent({ params }: PROPS) {
  const selectedTemplate: TEMPLATES | undefined = Templates?.find(
    (item) => item.slug === params["template-slug"]
  );
  const [aiOutputText, setAiOutput] = useState<string>();
  const [loading, setLoading] = useState(false);
  const { user } = useUser();
  const router = useRouter();
  const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);
  const { userSubscription, setUserSubscription } = useContext(UserSubscriptionContext);
  const { updateCreditUsage, setUpdateCreditUsage } = useContext(UpdateCreditUsageContext);


  const GenerateAIContent = async (formData: any) => {
    if (totalUsage >= 10000 && !userSubscription) {

      console.log('Please Upgrade')
      router.push('/dashboard/billing')
      return;
    }
    setLoading(true)
    const SelectedPrompt = selectedTemplate?.aiPrompt;
    const FinalAiPrompt = JSON.stringify(formData) + "," + SelectedPrompt;
    const result = await chatSession.sendMessage(FinalAiPrompt)

    setAiOutput(result?.response.text())
    console.log(result?.response.text())
    await SaveInDb(
      JSON.stringify(formData),
      selectedTemplate?.slug ?? "", // Default to empty string if undefined
      result?.response.text() ?? "" // Default to empty string if undefined
    );

    setLoading(false)
    setUpdateCreditUsage(Date.now())
  };

  const SaveInDb = async (formData: any, slug: string, aiResp: string) => {
    try {
      const createdBy =
        user?.fullName ||
        `${user?.firstName || ""} ${user?.lastName || ""}`.trim() ||
        "Unnamed User"; // Fallback if name isn't available

      const result = await db.insert(aiOutput).values({
        id: crypto.randomUUID(),
        formData: JSON.stringify(formData),
        templateSlug: slug,
        aiResponse: aiResp,
        createdBy, // Store the user's name
        createdAt: new Date(),
      });

      console.log("Saved to DB:", result);
    } catch (error) {
      console.error("Error saving to DB:", error);
    }
  };


  return (
    <div className="p-5">
      <Link href="/dashboard">
        <Button>
          <ArrowLeft className="mr-2" />
          Back
        </Button>
      </Link>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 py-5">
        <div className="lg:col-span-1 md:col-span-1 col-span-1">
          <FormSection
            selectedTemplate={selectedTemplate}
            useFormInput={GenerateAIContent}
            loading={loading}
          />
        </div>
        <div className="lg:col-span-2 md:col-span-1 col-span-1">
          <OutputSection aiOutput={aiOutputText || ""} />
        </div>
      </div>
    </div>
  );
}

export default CreateContent;
