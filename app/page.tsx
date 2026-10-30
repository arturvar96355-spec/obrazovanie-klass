import { Admission } from '@/components/sections/Admission';
import { Campus } from '@/components/sections/Campus';
import { DayScene } from '@/components/sections/DayScene';
import { Director } from '@/components/sections/Director';
import { Hero } from '@/components/sections/Hero';
import { Languages } from '@/components/sections/Languages';
import { Nots } from '@/components/sections/Nots';
import { Pricing } from '@/components/sections/Pricing';
import { Reviews } from '@/components/sections/Reviews';
import { Route } from '@/components/sections/Route';
import { Shell } from '@/components/sections/Shell';
import { Teachers } from '@/components/sections/Teachers';

export default function Home() {
  return (
    <Shell>
      <Hero />
      <Nots />
      <DayScene />
      <Campus />
      <Languages />
      <Director />
      <Teachers />
      <Pricing />
      <Reviews />
      <Admission />
      <Route />
    </Shell>
  );
}
