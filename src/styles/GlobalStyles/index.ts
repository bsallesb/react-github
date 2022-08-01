import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }

    :root {
        --color-scale-gray-0: #f0f6fc;
        --color-scale-gray-1: #c9d1d9;
        --color-scale-gray-2: #b1bac4;
        --color-scale-gray-3: #8b949e;
        --color-scale-gray-4: #6e7681;
        --color-scale-gray-5: #484f58;
        --color-scale-gray-6: #30363d;
        --color-scale-gray-7: #21262d;
        --color-scale-gray-8: #161b22;
        --color-scale-gray-9: #0d1117;
        --color-blue: #58a6ff;
    }

    html, body, #root {
        min-height: 100vh;
    }

    body {
        background-color: var(--color-scale-gray-9);
        font-family: arial, sans-serif;
        -webkit-font-smoothing: antialiased;
    }

    a {
        color: inherit;
    }

    // Bootstrap overrides
    .fs-7 { font-size: 4rem; }
    .fs-8 { font-size: 0.8rem; }

    .text-color-header-icons { color: var(--color-scale-gray-0); }
    .text-color-footer-icons { color: var(--color-scale-gray-4); }
    .text-color-body { color: var(--color-scale-gray-2); }
    .text-color-blue { color: var(--color-blue); }

    input:focus-visible { outline: none; }
`;
