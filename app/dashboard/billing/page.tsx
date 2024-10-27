"use client";
import React, { useState, useEffect, useContext } from "react";
import { Button } from "@/components/ui/button";
import { Check, Loader2Icon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import axios from "axios";
import { db } from "@/utils/db";
import { UserSubscription } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import { UserSubscriptionContext } from "@/app/(context)/UserSubscriptionContext";

const Billing = () => {
    const [loading, setLoading] = useState(false);
    const { user } = useUser();
    const { userSubscription, setUserSubscription } = useContext(UserSubscriptionContext);
    const CreateSubscription = () => {
        setLoading(true);
        axios.post("/api/create-subscription", {}).then(
            (resp) => {
                console.log(resp.data);
                OnPayment(resp.data.id);
            },
            (error) => {
                setLoading(false);
            }
        );
    };

    const OnPayment = (subId: string) => {
        if (typeof window !== "undefined" && window.Razorpay) {
            const options = {
                key: process.env.NEXT_PUBLIC_RAJORPAY_KEY_ID || "",
                subscription_id: subId,
                name: "NuzhatKhatoon Ai Apps",
                description: "Monthly Subscription",
                handler: async (resp: any) => {
                    console.log(resp);
                    if (resp) {
                        SaveSubscription(resp.razorpay_payment_id);
                    }
                    setLoading(false);
                },
            };
            const rzp = new window.Razorpay(options);
            rzp.open();
        } else {
            console.error("Razorpay SDK not loaded");
        }
    };

    useEffect(() => {
        const loadRazorpayScript = () => {
            return new Promise((resolve, reject) => {
                const script = document.createElement("script");
                script.src = "https://checkout.razorpay.com/v1/checkout.js";
                script.async = true;
                script.onload = () => resolve(true);
                script.onerror = () => reject(new Error("Razorpay SDK failed to load"));
                document.body.appendChild(script);
            });
        };

        loadRazorpayScript()
            .then(() => {
                console.log("Razorpay SDK loaded successfully");
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const SaveSubscription = async (paymentId: string) => {
        const result = await db.insert(UserSubscription).values({
            email: user?.primaryEmailAddress?.emailAddress,
            userName: user?.fullName,
            active: true,
            paymentId: paymentId,
            joinDate: moment().format("DD/MM/yyyy"),
        });
        console.log(result);
        if (result) {
            window.location.reload();
        }
    };

    return (
        <div>
            <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
            <div className="min-h-screen bg-gray-50 py-12 px-4">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-4xl font-bold text-center mb-12">
                        Upgrade With Monthly Plan
                    </h1>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {/* Free Plan Card */}
                        <Card className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
                            <CardHeader className="p-6 text-center">
                                <CardTitle className="text-2xl font-bold mb-4">
                                    Free
                                </CardTitle>
                                <div className="flex items-baseline justify-center">
                                    <span className="text-5xl font-extrabold tracking-tight">
                                        0₹
                                    </span>
                                </div>
                            </CardHeader>

                            <CardContent className="p-6">
                                <ul className="space-y-4">
                                    <li className="flex items-center">
                                        <Check className="h-5 w-5 text-indigo-500 mr-3" />
                                        <span className="text-gray-700">10,000 Words/Month</span>
                                    </li>
                                    <li className="flex items-center">
                                        <Check className="h-5 w-5 text-indigo-500 mr-3" />
                                        <span className="text-gray-700">50+ Content Templates</span>
                                    </li>
                                    <li className="flex items-center">
                                        <Check className="h-5 w-5 text-indigo-500 mr-3" />
                                        <span className="text-gray-700">Unlimited Download & Copy</span>
                                    </li>
                                    <li className="flex items-center">
                                        <Check className="h-5 w-5 text-indigo-500 mr-3" />
                                        <span className="text-gray-700">1 Month of History</span>
                                    </li>
                                </ul>

                                <Button
                                    // disabled={loading}
                                    // onClick={() => CreateSubscription()}
                                    className="w-full mt-8 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
                                >
                                    {/* {loading && <Loader2Icon className="animate-spin mr-2" />} */}
                                    Currently Active Plan
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Monthly Plan Card */}
                        <Card className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
                            <CardHeader className="p-6 text-center">
                                <CardTitle className="text-2xl font-bold mb-4">
                                    Monthly
                                </CardTitle>
                                <div className="flex items-baseline justify-center">
                                    <span className="text-5xl font-extrabold tracking-tight">
                                        100.0₹
                                    </span>
                                    <span className="ml-1 text-xl text-gray-500">/month</span>
                                </div>
                            </CardHeader>

                            <CardContent className="p-6">
                                <ul className="space-y-4">
                                    <li className="flex items-center">
                                        <Check className="h-5 w-5 text-indigo-500 mr-3" />
                                        <span className="text-gray-700">1,00,000 Words/Month</span>
                                    </li>
                                    <li className="flex items-center">
                                        <Check className="h-5 w-5 text-indigo-500 mr-3" />
                                        <span className="text-gray-700">50+ Template Access</span>
                                    </li>
                                    <li className="flex items-center">
                                        <Check className="h-5 w-5 text-indigo-500 mr-3" />
                                        <span className="text-gray-700">Unlimited Download & Copy</span>
                                    </li>
                                    <li className="flex items-center">
                                        <Check className="h-5 w-5 text-indigo-500 mr-3" />
                                        <span className="text-gray-700">1 Year of History</span>
                                    </li>
                                </ul>
                                <Button
                                    disabled={loading}
                                    onClick={() => CreateSubscription()}
                                    className="w-full mt-8 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
                                >
                                    {loading && <Loader2Icon className="animate-spin mr-2" />}
                                    {userSubscription ? 'Active Plan' : 'Get Started'}
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Billing;