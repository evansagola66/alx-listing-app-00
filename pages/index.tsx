import Image from "next/image";
import { IMAGES } from "@/constants/images";
import { PROPERTYLISTINGSAMPLE } from "@/constants/properties";
import Pill from "@/components/common/Pill";
import PropertyCard from "@/components/common/PropertyCard";
import { useState } from "react";

const filters = ["Top Villa", "Self Checkin", "Pet Friendly", "Near Beach"];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center text-center text-white">
        <Image
          src={IMAGES.HERO_BG}
          alt="Hero background"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Find your favorite place here!
          </h1>
          <p className="text-lg md:text-2xl">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-6 flex flex-wrap gap-4 justify-center">
        {filters.map((filter) => (
          <Pill
            key={filter}
            label={filter}
            isActive={activeFilter === filter}
            onClick={() => setActiveFilter(filter)}
          />
        ))}
      </section>

      {/* Listing Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 pb-12">
        {PROPERTYLISTINGSAMPLE.map((property) => (
          <PropertyCard
            key={property.id}
            image={property.image}
            name={property.name}
            price={property.price}
            rating={property.rating}
          />
        ))}
      </section>
    </div>
  );
}
