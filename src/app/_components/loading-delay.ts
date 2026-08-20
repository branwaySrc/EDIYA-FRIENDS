const routeLoadingPreviewDelayMs = 500;

export async function waitForRouteLoadingPreview() {
	await new Promise(resolve => setTimeout(resolve, routeLoadingPreviewDelayMs));
}
