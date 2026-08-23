// Splits a markdown file into sections: each top-level "# Heading" starts a
// new section, and everything below it (until the next "# Heading") becomes
// that section's body.
export function parseMarkdownSections(markdown) {
	return markdown
		.split(/\n(?=# )/)
		.map((section) => section.trim())
		.filter(Boolean)
		.map((section) => {
			const lines = section.split('\n')
			const title = lines[0].replace(/^#\s+/, '').trim()
			const description = lines.slice(1).join('\n').trim()
			return { title, description }
		})
}
