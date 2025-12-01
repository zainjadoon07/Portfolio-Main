"use client";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export function ThreeDCard() {
  return (
    <CardContainer className="inter-var">
      <CardBody
        className="w-full">
       
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src="/image.png"
            height="500"
            width="350"
            className="h-85 object-cover rounded-xl group-hover/card:shadow-xl bg-neutral-900"
            alt="thumbnail" />
        </CardItem>
        </CardBody>
    </CardContainer>
  );
}
