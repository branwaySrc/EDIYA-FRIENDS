import { About } from "./_features/about";
import { Beverage } from "./_features/beverage";
import { Film } from "./_features/film";
import { Hero } from "./_features/hero";
import { Intro } from "./_features/intro";
import { KeyPoint } from "./_features/key-point";
import { Solution } from "./_features/solution";

import { Cta } from "@/components/globals/cta";

export default async function Home() {
	return (
		<main className="bg-white">
			<Hero />
			<Film />
			<Intro />
			<About />
			<KeyPoint />
			<Solution />
			<Beverage />
			<Cta />
		</main>
	);
}
