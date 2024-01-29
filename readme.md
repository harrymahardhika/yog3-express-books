1. Mendelegasikan tugas untuk setiap route berdasarkan resource/entitas

   - /authors
   - /categories
   - /publishers
   - /books

2. Membuat route untuk setiap resource/entitas

```bash
app.js
-> app/router.js
   -> routes/author.js
	 -> routes/category.js
	 -> routes/publisher.js
	 -> routes/book.js
```

3. Mendelegasikan tugas query untuk setiap resource/entitas

- /services/author.js
- /services/category.js
- /services/publisher.js
- /services/book.js
