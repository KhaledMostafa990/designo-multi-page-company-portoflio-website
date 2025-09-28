import { ourLocations } from '@/data/global';
import Location from '@/features/locationsPage/Location';
import type { LocationData } from '@/types/locations';

export const metadata = {
  title: 'Locations',
};

export default async function Locations({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const messages = (await import(`../../../../messages/${locale}.json`)).default as any;

  // Translate locations data
  const translatedLocations = ourLocations.map((location) => {
    const locationKey = location.country; // 'Canada', 'Australia', 'United Kingdom'
    return {
      ...location,
      country: messages?.Locations?.[locationKey]?.Title ?? location.country,
      fullAddress:
        `${messages?.Locations?.[locationKey]?.Address1 ?? ''} ${
          messages?.Locations?.[locationKey]?.Address2 ?? ''
        }`.trim() || location.fullAddress,
    };
  });

  return (
    <div className="flex flex-col gap-8">
      {translatedLocations.map((location: LocationData, index) => (
        <Location key={location.country} location={location} index={index} />
      ))}
    </div>
  );
}
