import type { HeroComponentData } from './props.types';

export function heroUpdateHandler(data: HeroComponentData, page: string, positionIndex: number) {}

/**
 * !! What I want to do is send a request on page load to find the database entry for the page.  That should return the page object that will tell me
 * !! all of the components and in the page.
 *
 * !! I will then call each of the component databases for the component on that page in that index position to load the content.
 */
