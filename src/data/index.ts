import { MainInfoPath, STRAPI_API_URL } from '@/global';
import { MainInfo } from '@/types';

// Get Main info
export async function getMainData(): Promise<MainInfo> {
  const MAIN_DATA_URL = `${STRAPI_API_URL}/${MainInfoPath}?populate=*`;
  const res = await fetch(`${MAIN_DATA_URL}`);
  const data = await res.json();
  const stapiData: MainInfo = data.data.attributes;
  return stapiData;
}
