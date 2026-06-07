/**
 * LazySection — lightweight scroll-anchor wrapper.
 *
 * Purpose: provide a stable DOM `id` anchor so the Navbar scroll-spy can
 * always find the right section via getElementById(), regardless of whether
 * the section's content is still being loaded by React.lazy/Suspense.
 *
 * Why no IntersectionObserver / conditional rendering here?
 * ─────────────────────────────────────────────────────────
 * Previously this component withheld children until the section entered the
 * viewport. That caused smooth-scroll to land on a zero-height placeholder,
 * which then expanded when the real content mounted — creating a layout-shift
 * battle that froze mobile browsers.
 *
 * Layout stability is now handled by the <SectionSkeleton> fallback in App.js,
 * which reserves the correct minimum height while the JS chunk loads.
 */
export default function LazySection({ children, id }) {
    return (
        <div id={id}>
            {children}
        </div>
    );
}
