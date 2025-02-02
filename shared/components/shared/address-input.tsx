"use client";

import React from "react";
import { AddressSuggestions } from "react-dadata";
import "react-dadata/dist/react-dadata.css";

interface Props {
  onChange?: (value?: string) => void;
}

export const AdressInput: React.FC<Props> = ({ onChange }) => {
  const api_key =
    process.env.DADATA_API_KEY || "b5b8bb983ddcd08648080e0271d9dd367bb7aa65";
  return (
    <AddressSuggestions
      token={api_key}
      onChange={(data) => onChange?.(data?.value)}
    />
  );
};
