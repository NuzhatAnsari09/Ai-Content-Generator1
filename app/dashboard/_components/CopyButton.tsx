// CopyButton.tsx
"use client";

import React from "react";
import { Button } from '@/components/ui/button';

interface CopyButtonProps {
    textToCopy: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ textToCopy }) => {
    return (
        <Button
            variant='ghost'
            className="text-primary hover:bg-primary/10"
            onClick={() => {
                navigator.clipboard.writeText(textToCopy);
            }}
        >
            Copy
        </Button>
    );
};

export default CopyButton;
