import { db, Blog } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(Blog).values([
		{ id: 1, author: 'Alice', content: 'Hello, world!', published: new Date('2021-01-01') },
		{ id: 2, author: 'Bob', content: 'Goodbye, world!', published: new Date('2021-01-02') },
		{ id: 3, author: 'Charlie', content: 'Good morning, world!', published: new Date('2021-01-03') },
	])
}
