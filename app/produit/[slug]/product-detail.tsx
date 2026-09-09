"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Product } from "@/data/products";

const Icon = ({ children, className = "" }: { children: string; className?: string }) => (
  <span aria-hidden="true" className={`material-symbols-outlined ${className}`}>
    {children}
  </span>
);

export default function ProductDetail({ product }: { product: Product }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedStorage, setSelectedStorage] = useState(product.storage[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  const whatsappMessage = encodeURIComponent(
    `Bonjour, je suis intéressé par le ${product.name} - ${selectedStorage} - ${selectedColor.name} (${new Intl.NumberFormat("fr-FR").format(product.price)} FCFA). Pouvez-vous m'en dire plus ?`
  );

  return (
    <main className="mx-auto max-w-container px-5 py-14 lg:px-16 min-h-screen">
      <Link href="/boutique" className="inline-flex items-center gap-2 text-primary hover:underline font-semibold mb-8">
        <Icon className="text-[20px]">arrow_back</Icon>
        Retourner à la boutique
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Image Gallery */}
        <div className="flex flex-col gap-4">
          <div className="bg-surface-container-lowest rounded-xl p-8 flex items-center justify-center shadow-sm min-h-[500px]">
            <Image
              alt={product.name}
              className="w-full h-auto object-contain max-h-[500px]"
              src={product.images[selectedImage]}
              width={500}
              height={500}
              priority
            />
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {product.images.map((image, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(idx)}
                className={`w-20 h-20 rounded-lg border-2 p-2 shrink-0 transition-all ${
                  selectedImage === idx
                    ? "border-primary bg-surface-container-lowest"
                    : "border-outline-variant opacity-70 hover:opacity-100"
                }`}
              >
                <Image
                  alt="Thumbnail"
                  className="w-full h-full object-contain"
                  src={image}
                  width={80}
                  height={80}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="flex flex-col gap-6 pt-3">
          <div>
            <div className="flex justify-between items-start mb-2">
              <h1 className="font-display-lg text-display-lg text-on-surface">{product.name}</h1>
              {product.status && (
                <span
                  className={`font-label-sm text-label-sm px-3 py-1 rounded-full ${
                    product.status === "Rupture"
                      ? "bg-error-container text-on-error-container"
                      : "bg-surface-container text-primary"
                  }`}
                >
                  {product.status}
                </span>
              )}
            </div>
            <div className="flex items-center gap-2 mb-3">
              <Icon className="text-amber-500">star</Icon>
              <span className="font-body-md text-body-md text-on-surface">{product.rating}</span>
            </div>
            <p className="font-headline-md text-headline-md text-primary">
              {new Intl.NumberFormat("fr-FR").format(product.price)} FCFA
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant mt-3">
              {product.description_long}
            </p>
          </div>

          {/* Specs */}
          <div className="bg-surface-container-lowest p-4 rounded-lg shadow-sm border border-outline-variant/30">
            <h3 className="font-label-sm text-label-sm text-on-surface mb-3">
              Caractéristiques techniques
            </h3>
            <ul className="space-y-2">
              {product.specs.map((spec, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2 font-body-md text-body-md text-on-surface-variant"
                >
                  <Icon className="text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                    {spec.icon}
                  </Icon>
                  {spec.text}
                </li>
              ))}
            </ul>
          </div>

          {/* Selections */}
          <div className="space-y-4">
            {product.storage.length > 1 && (
              <div>
                <h3 className="font-label-sm text-label-sm text-on-surface mb-2">Stockage</h3>
                <div className="flex gap-2 flex-wrap">
                  {product.storage.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedStorage(size)}
                      className={`flex-1 min-w-[80px] py-2 border-2 rounded-lg font-button-text text-button-text transition-colors ${
                        selectedStorage === size
                          ? "border-primary text-primary bg-primary-fixed/20"
                          : "border-outline-variant text-on-surface-variant hover:border-primary"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {product.colors.length > 1 && (
              <div>
                <h3 className="font-label-sm text-label-sm text-on-surface mb-2">
                  Couleur: {selectedColor.name}
                </h3>
                <div className="flex gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color)}
                      className={`w-10 h-10 rounded-full ring-offset-2 transition-all ${
                        selectedColor.name === color.name
                          ? "ring-2 ring-primary"
                          : "ring-1 ring-transparent hover:ring-outline-variant"
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* CTA */}
          <div className="flex flex-col gap-3 mt-auto">
            <a
              href={`https://wa.me/?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#25D366] hover:bg-[#20b858] text-white font-button-text text-button-text py-4 rounded-lg flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-sm"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"></path>
              </svg>
              Commander sur WhatsApp
            </a>
            <p className="text-center font-label-sm text-label-sm text-on-surface-variant/70 text-xs">
              Ouvre WhatsApp avec un message pré-rempli.
            </p>
            <button className="w-full bg-transparent border border-on-surface hover:bg-surface-container text-on-surface font-button-text text-button-text py-3 rounded-lg flex items-center justify-center gap-2 transition-colors">
              <Icon className="text-[20px]">favorite</Icon>
              Ajouter aux favoris
            </button>
          </div>

          {/* Help */}
          <div className="mt-3 bg-surface-container-low p-4 rounded-lg flex items-center justify-between">
            <div>
              <h4 className="font-label-sm text-label-sm text-on-surface">Besoin d'aide ?</h4>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm">
                Discutez avec un conseiller.
              </p>
            </div>
            <a className="text-primary font-button-text text-button-text hover:underline flex items-center gap-1" href="#">
              Chat <Icon className="text-[16px]">arrow_forward</Icon>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
