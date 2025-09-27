import { ourLocations } from '@/data/global';
import Location from '@/features/locationsPage/Location';
import type { LocationData } from '@/types/locations';

export const metadata = {
  title: 'Locations',
};

export default function Locations() {
  return (
    <div className="flex flex-col gap-8">
      {ourLocations.map((location: LocationData, index) => (
        <Location key={location.country} location={location} index={index} />
      ))}
    </div>
  );
}
