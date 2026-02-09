/**
 * Temporarily archive pages so they don't appear in the nav and aren't reachable.
 * Add a path here to hide it from the site; remove it to bring the page back.
 *
 * Example: ['/documents', '/weekly-menus']
 */
export const ARCHIVED_PAGE_PATHS: string[] = [
  '/meet-the-team',
  '/weekly-menus',
  '/help-and-advice',
];

export function isArchived(path: string): boolean {
  return ARCHIVED_PAGE_PATHS.includes(path);
}
