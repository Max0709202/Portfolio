// Define types locally to avoid circular dependencies
type CommandGroup = {
    heading: string;
    items: CommandItem[];
};

type CommandItem = {
    id: string;
    value: string;
    href?: string;
    action?: string;
    icon: string;
    keywords?: string[];
    external?: boolean;
    label?: string;
};

type KeyboardShortcut = {
    type: 'navigation' | 'action';
    href?: string;
    action?: string;
    commandKey: boolean;
    external?: boolean;
};

// Command Palette Items Configuration
export const commandPaletteData: CommandGroup[] = [
    {
        heading: 'Navigation',
        items: [
            {
                id: 'home',
                value: 'home main inicio',
                href: '/',
                icon: 'home',
                keywords: ['home', 'main', 'inicio', 'principal'],
                label: 'Home'
            },
            {
                id: 'about',
                value: 'about me contact',
                href: '/#about',
                icon: 'home',
                keywords: ['about', 'me', 'contact', 'acerca'],
                label: 'About'
            },
            {
                id: 'skills',
                value: 'skills abilities competencies',
                href: '/#skills',
                icon: 'star',
                keywords: ['skills', 'abilities', 'competencies', 'habilidades'],
                label: 'Skills'
            },
            {
                id: 'projects',
                value: 'projects work portfolio',
                href: '/projects',
                icon: 'folder',
                keywords: ['projects', 'work', 'portfolio', 'proyectos'],
                label: 'Projects'
            },
            {
                id: 'blog',
                value: 'blog articles posts',
                href: '/blog',
                icon: 'newspaper',
                keywords: ['blog', 'articles', 'posts', 'writing', 'articulos'],
                label: 'Blog'
            },
            {
                id: 'services',
                value: 'services work pricing',
                href: '/services',
                icon: 'gear',
                keywords: ['services', 'work', 'pricing', 'servicios', 'precios'],
                label: 'Services'
            },
            {
                id: 'faqs',
                value: 'faqs questions answers help',
                href: '/#faqs',
                icon: 'search',
                keywords: ['faqs', 'questions', 'answers', 'help', 'preguntas', 'respuestas'],
                label: 'FAQs'
            },
            {
                id: 'testimonials',
                value: 'testimonials reviews feedback',
                href: '/#testimonials',
                icon: 'quote',
                keywords: ['testimonials', 'reviews', 'feedback', 'testimonios', 'reseñas'],
                label: 'Testimonials'
            },
            {
                id: 'tools',
                value: 'tools utilities goodies',
                href: '/goodies',
                icon: 'folder',
                keywords: ['tools', 'utilities', 'herramientas', 'goodies', 'snippets', 'links'],
                label: 'Goodies'
            },
            {
                id: 'contact',
                value: 'contact get in touch',
                href: '/#contact',
                icon: 'mail',
                keywords: ['contact', 'get in touch', 'email', 'contacto'],
                label: 'Contact'
            }
        ]
    },
    {
        heading: 'Goodies',
        items: [
            {
                id: 'goodies-snippets',
                value: 'snippets code examples',
                href: '/goodies/snippets',
                icon: 'code',
                keywords: ['snippets', 'code', 'examples', 'codigo', 'ejemplos'],
                label: 'Code Snippets'
            },
            {
                id: 'goodies-css-tricks',
                value: 'css tricks styles animations',
                href: '/goodies/css-tricks',
                icon: 'paint',
                keywords: ['css', 'tricks', 'styles', 'animations', 'trucos', 'estilos'],
                label: 'CSS Tricks'
            },
            {
                id: 'goodies-tools',
                value: 'tools utilities apps',
                href: '/goodies/tools',
                icon: 'gear',
                keywords: ['tools', 'utilities', 'apps', 'herramientas', 'utilidades'],
                label: 'Dev Tools'
            },
            {
                id: 'goodies-links',
                value: 'useful links resources bookmarks',
                href: '/goodies/useful-links',
                icon: 'link',
                keywords: ['links', 'resources', 'bookmarks', 'enlaces', 'recursos'],
                label: 'Useful Links'
            }
        ]
    },
    {
        heading: 'Quick Actions',
        items: [
            {
                id: 'help',
                value: 'help keyboard shortcuts',
                action: 'showHelp',
                icon: 'search',
                keywords: ['help', 'shortcuts', 'keyboard', 'ayuda'],
                label: 'Help & Shortcuts'
            },
            {
                id: 'copy-url',
                value: 'copy current url link',
                action: 'copyUrl',
                icon: 'folder',
                keywords: ['copy', 'url', 'link', 'share', 'copiar'],
                label: 'Copy Current URL'
            }
        ]
    },
    {
        heading: 'Social',
        items: [
            {
                id: 'github',
                value: 'github profile code repository',
                href: 'https://github.com/Max0709202',
                external: true,
                icon: 'github',
                keywords: ['github', 'code', 'repository', 'git', 'repos'],
                label: 'GitHub'
            },
            {
                id: 'linkedin',
                value: 'linkedin profile professional network',
                href: 'https://www.linkedin.com/in/nishida3149559',
                external: true,
                icon: 'linkedin',
                keywords: ['linkedin', 'professional', 'network', 'career', 'work'],
                label: 'LinkedIn'
            },
            {
                id: 'whatsapp',
                value: 'whatsapp chat message contact',
                href: 'https://wa.me/8107024786494',
                external: true,
                icon: 'whatsapp',
                keywords: ['whatsapp', 'chat', 'message', 'contact', 'phone'],
                label: 'WhatsApp'
            },
            {
                id: 'mail',
                value: 'email mail contact message',
                href: 'mailto:passionmax22@gmail.com',
                external: true,
                icon: 'mail',
                keywords: ['email', 'mail', 'contact', 'message', 'send'],
                label: 'Email'
            }
        ]
    }
];

// Keyboard shortcuts mapping for global shortcuts (Cmd/Ctrl + key)
export const keyboardShortcuts: Record<string, KeyboardShortcut> = {
    h: { type: 'navigation', href: '/', commandKey: true },
    p: { type: 'navigation', href: '/projects', commandKey: true },
    b: { type: 'navigation', href: '/blog', commandKey: true },
    s: { type: 'navigation', href: '/services', commandKey: true },
    t: { type: 'navigation', href: '/goodies', commandKey: true },
    a: { type: 'navigation', href: '/#about', commandKey: true },
    '?': { type: 'action', action: 'showHelp', commandKey: true },
    c: { type: 'action', action: 'copyUrl', commandKey: true },
    g: { type: 'navigation', href: 'https://github.com/Max0709202', external: true, commandKey: true },
    l: { type: 'navigation', href: 'https://www.linkedin.com/in/nishida3149559', external: true, commandKey: true }
};

// Helper function to get shortcut display text
export const getShortcutDisplay = (key: string): string => {
    const isMac = typeof navigator !== 'undefined' && navigator.userAgent.toUpperCase().indexOf('MAC') >= 0;
    const cmdKey = isMac ? '⌘' : 'Ctrl+';
    return `${cmdKey}${key.toUpperCase()}`;
};

// Helper function to get shortcut for a command item
export const getShortcutForItem = (item: CommandItem): string | null => {
    // Find the keyboard shortcut that matches this item
    for (const [key, shortcut] of Object.entries(keyboardShortcuts)) {
        if (shortcut.type === 'navigation') {
            if (shortcut.href === item.href) {
                return getShortcutDisplay(key);
            }
        } else if (shortcut.type === 'action') {
            if (shortcut.action === item.action) {
                return getShortcutDisplay(key);
            }
        }
    }
    return null;
};
