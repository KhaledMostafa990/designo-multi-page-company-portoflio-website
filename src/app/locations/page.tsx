import { ourLocations } from '@/data/global';
import Location from '@/features/locationsPage/Location';

export const metadata = {
  title: 'Locations',
};

export interface LocationData {
  country: string;
  officeName: string;
  fullAddress: string;
  phone: string;
  email: string;
  mapImageTab: any;
  mapImageDesk: any;
  image: any;
}

export default function Locations() {
  return (
    <div className="flex flex-col gap-8">
      {ourLocations.map((location: LocationData, index) => (
        <Location key={location.country} location={location} index={index} />
      ))}
    </div>
  );
}
