import React from 'react';
import PageLayout from '../components/PageLayout';
import { ContentSection } from '../components/ContentSection';

const HERO = {
  src: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2400&auto=format&fit=crop',
  alt: 'Travel essentials and map on a desk',
};

export default function TravelInfoPage() {
  return (
    <PageLayout
      eyebrow="Before you go"
      title="Travel info"
      description="Practical guidance for passports, health, money, and packing—tailored to safari travel, not generic city trips."
      heroImage={HERO}
      wide
    >
      <div className="space-y-20">
        <ContentSection title="Documents & visas" index={0}>
          <p>
            Passports generally need six months&apos; validity beyond return. Visa rules change—confirm e-visas or embassy requirements for
            each country on your route. We send a checklist with your booking confirmation.
          </p>
        </ContentSection>

        <ContentSection title="Health & insurance" index={1}>
          <p>
            Consult your doctor or a travel clinic for malaria prophylaxis, yellow fever certificates (if routing through endemic zones),
            and routine boosters. Comprehensive travel insurance with medical evacuation is mandatory for our trips—we outline minimum
            cover in your quote.
          </p>
        </ContentSection>

        <ContentSection title="Money & tipping" index={2}>
          <p>
            US dollars widely accepted for park fees; local currency useful for airports and small purchases. Tipping guides and camp
            staff is customary—we provide suggested ranges per guest per day in your final pack.
          </p>
        </ContentSection>

        <ContentSection title="Packing essentials" index={3}>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {[
              'Neutral layers & light rain shell',
              'Wide-brim hat & quality sunglasses',
              'Binoculars (8×32 or 10×42 ideal)',
              'Sunscreen & insect repellent',
              'Soft duffel for light-aircraft limits',
            ].map((item) => (
              <li key={item} className="flex gap-3 text-[15px] font-light text-stone-600">
                <span className="text-stone-300">·</span>
                {item}
              </li>
            ))}
          </ul>
        </ContentSection>

        <ContentSection title="Connectivity" index={4}>
          <p>
            Expect patchy signal in reserves; many camps offer Wi-Fi in main areas only. Download offline maps and entertainment before
            travel days. We share emergency contact numbers for ground handlers in each country.
          </p>
        </ContentSection>
      </div>
    </PageLayout>
  );
}
