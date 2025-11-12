"use client";

import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

interface ErrorBoundaryProps {
  error: Error;
  reset: () => void;
}
export default function ErrorBoundary({ error, reset }: ErrorBoundaryProps) {
  return (
    <div className="flex min-h-[400px] items-center justify-center p-4">
      <div className="w-full max-w-md text-center">
        <div className="relative mb-6 inline-block">
          <AlertTriangle className="mx-auto size-16 text-gray-100" />
          <div className="absolute top-1/2 left-1/2 h-1 w-16 -translate-x-1/2 -translate-y-1/2 -rotate-12 transform bg-red-500 opacity-80"></div>
        </div>

        <h2 className="text-heading-xl mb-2 font-sans text-white">
          Algo aconteceu de errado
        </h2>
        {error.message && (
          <p className="text-body-sm mb-2 max-h-24 overflow-y-scroll px-4 text-red-400 ">
            {error.message}
          </p>
        )}
        <Button className="mt-4" onClick={reset}>
          Tente novamente
        </Button>
      </div>
    </div>
  );
}
