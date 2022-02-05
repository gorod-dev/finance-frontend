import { renderWithTheme } from '@/shared/lib/test-utils';
import { Page } from '@/shared/ui';

describe('test auth page', () => {
  it('should render fullsize layout', () => {
    const { container } = renderWithTheme(
      <Page.Layout variant="fullsize">
        <div>123</div>
      </Page.Layout>,
    );

    expect(container.querySelector('#fullsize-container')).toBeVisible();
  });
  it('should render children', () => {
    const { container } = renderWithTheme(
      <Page.Layout>
        <div id="test">test</div>
      </Page.Layout>,
    );

    expect(container.querySelector('#test')).toBeVisible();
  });
});
