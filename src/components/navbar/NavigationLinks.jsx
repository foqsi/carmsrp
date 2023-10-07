// A utility function to join class names based on their truthy values.
// It's useful for conditionally applying classes in components.
export function classNames(...classes) {
    // Filter out any falsy values and join the remaining classes into a single string
    return classes.filter(Boolean).join(' ')
}

// Component to render a list of navigation links
export function NavigationLinks({ navigation }) {
    // Map through the provided navigation items and render them as links
    return navigation.map((item) => (
        <a
            key={item.name}
            href={item.href}
            // Dynamically apply classes based on whether the item is the current page or not
            className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium'
            )}
            // Enhance accessibility by indicating the current page
            aria-current={item.current ? 'page' : undefined}
        >
            {item.name}
        </a>
    ));
}
