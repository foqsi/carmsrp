export function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export function NavigationLinks({ navigation }) {
    return navigation.map((item) => (
        <a
            key={item.name}
            href={item.href}
            className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium'
            )}
            aria-current={item.current ? 'page' : undefined}
        >
            {item.name}
        </a>
    ));
}
