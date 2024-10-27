import { createContext } from "react";

interface UpdateCreditUsageContextType {
    updateCreditUsage: any;
    setUpdateCreditUsage: (value: any) => void;
}

export const UpdateCreditUsageContext = createContext<UpdateCreditUsageContextType | null>({
    updateCreditUsage: null,
    setUpdateCreditUsage: () => { },
});
