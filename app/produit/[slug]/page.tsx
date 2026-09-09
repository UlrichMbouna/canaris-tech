import type { Metadata } from "next";
import { getProduct, products } from "@/data/products";
import { notFound } from "next/navigation";
import ProductDetail from "./product-detail";

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    return {
      title: "Produit non trouvé",
    };
  }

  return {
    title: product.name,
    description: product.description_long,
  };
}

export default async function ProductPage({ 
  params,
}: { 
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  return <ProductDetail product={product} />;
}

