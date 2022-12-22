import { client } from '$services/redis';
import { pageCacheKey } from '$services/keys';

const pages = {
	'/about': true,
	'/privacy': true,
	'/auth/signin': true,
	'/auth/signup': true
};

export const getCachedPage = (route: string) => {
	if (pages[route]) {
		return client.get(pageCacheKey(route));
	}

    return null;
};

export const setCachedPage = (route: string, page: string) => {
    if (pages[route]) {
		return client.set(pageCacheKey(route), page, {
            EX: 30,
        });
	}
};
