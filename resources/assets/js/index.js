/**
 * Asset dependencies.
 */
import 'css/app.css';

/**
 * Hide other open accordion items when another is oepened.
 *
 * Turns a group of <detail> tags in to "true" accordions.
 */
document.querySelectorAll( '.accordion-list' ).forEach( makeTrueAccordion );
  
/**
 * Attach click events to each <details> item to close any previously opened.
 *
 * @param {HTMLElement} accordionList Element containing <detail> elements.
 */
function makeTrueAccordion( accordionList ) {
  const items = accordionList.querySelectorAll( '.accordion-list-item__label' );

  items.forEach( ( item ) => {

    // Attach a click event to each item.
    return item.addEventListener( 'click', ( e ) => {
      e.preventDefault();

      // Go through items again to get current states.
      items.forEach( ( freshItem ) => {
        const parentEl = freshItem.parentElement;
        const isOpen = parentEl.getAttribute( 'open' ) || false;

        // Close all items.
        parentEl.removeAttribute( 'open' );

        // Open if not previously open and the item matches the originally clicked.
        if ( ! isOpen && e.currentTarget === freshItem ) {
          parentEl.setAttribute( 'open', true );
        }
      } );
    } );
  } );
};
