import type { Metadata } from "next";
import { Boutique } from "@/components/boutique";

export const metadata: Metadata = { title: "Boutique", description: "Parcourez notre sélection de smartphones, ordinateurs, tablettes et accessoires high-tech." };

export default function BoutiquePage() { return <Boutique />; }
