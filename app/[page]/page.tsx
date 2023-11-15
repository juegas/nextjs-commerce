import { builder } from '@builder.io/sdk';
import { RenderBuilderContent } from '../../components/builder';

// Replace with your Public API Key
//TODO: move to env var
builder.init('35804fe9327749d0814e830226118bc6');

export default async function Page() {
  const content = await builder
    // Get the page content from Builder with the specified options
    .get('page', {
      userAttributes: {
        // Use the page path specified in the URL to fetch the content
        urlPath: '/test-page'
      },
      // Set prerender to false to return JSON instead of HTML
      prerender: false
    })
    // Convert the result to a promise
    .toPromise();

  return (
    <>
      {/* Render the Builder page */}
      <RenderBuilderContent content={content} />
    </>
  );
}
