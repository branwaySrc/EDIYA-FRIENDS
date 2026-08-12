import { About } from "./(features)/about";
import { Beverage } from "./(features)/beverage";
import { Cta } from "./(features)/cta";
import { Film } from "./(features)/film";
import { Hero } from "./(features)/hero";
import { Intro } from "./(features)/intro";
import { KeyPoint } from "./(features)/key-point";
import { Solution } from "./(features)/solution";

export default function Home() {
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
