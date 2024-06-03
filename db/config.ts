import { column, defineDb, defineTable, NOW } from 'astro:db';

export const Blog = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    author: column.text(),
    content: column.text({ optional: true }),
    published: column.date({ default: NOW }),
    likes: column.number({ default: 0 }),
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: { Blog }
});
