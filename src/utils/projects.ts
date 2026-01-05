import type { CollectionEntry } from 'astro:content';

const projectsContentDir = new URL('../content/projects/', import.meta.url);

/**
 * Extracts the clean slug from a project entry.
 * Projects are stored as {slug}-{lang}.md (e.g., hospeda-en.md, hospeda-es.md)
 * This function removes the language suffix and file extension to get the URL-friendly slug.
 *
 * @param project - The project collection entry
 * @returns The clean slug without language suffix (e.g., "hospeda")
 */
export function getProjectSlug(project: CollectionEntry<'projects'>): string {
    // Remove the .md extension and -en or -es suffix from the file ID
    return project.id.replace(/\.md$/, '').replace(/-(en|es)$/, '');
}

/**
 * Resolves a project asset path declared inside the `src/content/projects` entries.
 * The paths in the frontmatter are relative to the markdown file, so this helper
 * converts them into absolute URLs that can be passed to `astro:assets`.
 *
 * @param relativePath - Path like "./_images/zodsmith/1.png"
 * @returns A URL pointing at the image file inside `src/content/projects`
 */
export function resolveProjectAssetUrl(relativePath: string): URL {
    const sanitizedPath = relativePath.replace(/^\.\//, '');
    return new URL(sanitizedPath, projectsContentDir);
}
